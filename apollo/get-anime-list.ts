import { gql } from '@apollo/client';
import createApolloClient from './client';
import { AnimePageData } from '@/app/anime/page';
import { AnimeBase } from '@/app/anime/types';

type getPageArgs = {
  page: number;
  perPage: number;
};

const mapper = (data: any): AnimePageData => {
  const animeList = (data.media as any[]).map<AnimeBase>((anime) => ({
    id: anime.id,
    title: anime.title.english ?? anime.title.romaji,
    image: anime.coverImage.large,
    episodes: anime.episodes,
  }));
  return {
    pageInfo: data.pageInfo,
    animeList,
  };
};

export async function getAnimeList({ page, perPage }: getPageArgs) {
  const client = createApolloClient();
  const { data, error } = await client.query({
    query: gql`
      query IndexPageQuery($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
          }
          media(type: ANIME, sort: [POPULARITY_DESC]) {
            id
            title {
              romaji
              english
            }
            coverImage {
              large
            }
            # 5. Number of episodes
            episodes
          }
        }
      }
    `,
    variables: {
      page,
      perPage,
    },
  });

  if (error) {
    console.error(error);
  }

  return mapper(data.Page);
}
