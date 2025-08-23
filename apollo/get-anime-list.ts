import { gql } from '@apollo/client';
import createApolloClient from './client';
import { AnimePageData } from '@/app/anime/page';
import { AnimeBase } from '@/app/anime/types';

type getPageArgs = {
  page: number;
  pageSize: number;
};

type Page = {
  pageInfo: {
    total: number;
  };
  media: {
    id: number;
    title: {
      romaji: string | null;
      english: string | null;
    };
    coverImage: {
      large: string;
    };
    episodes: number | null;
    description: string | null;
  }[];
};

const mapper = (data: Page): AnimePageData => {
  const animeList = (data.media as Page['media']).map<AnimeBase>((anime) => ({
    id: anime.id,
    title: anime.title.english ?? anime.title.romaji ?? '',
    image: anime.coverImage.large,
    episodes: anime.episodes ?? 0,
    description: anime.description ?? '',
  }));
  return {
    pageInfo: data.pageInfo,
    animeList,
  };
};

export async function getAnimeList({ page, pageSize }: getPageArgs) {
  const client = createApolloClient();
  const { data, error } = await client.query({
    query: gql`
      query IndexPageQuery($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
          pageInfo {
            total
          }
          media(type: ANIME, sort: [POPULARITY_DESC]) {
            id
            title {
              romaji
              english
            }
            episodes
            description(asHtml: false)
            coverImage {
              large
            }
          }
        }
      }
    `,
    variables: {
      page,
      perPage: pageSize,
    },
  });

  if (error) {
    console.error(error);
  }

  return mapper(data.Page);
}
