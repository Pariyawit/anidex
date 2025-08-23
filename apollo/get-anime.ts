import { gql } from '@apollo/client';
import createApolloClient from './client';
import { Anime } from '@/app/anime/types';

type getAnimeArgs = {
  id: number;
};

const mapper = (anime: any): Anime => {
  return {
    id: anime.id,
    title: anime.title.english ?? anime.title.romaji ?? '',
    image: anime.coverImage.extraLarge,
    episodes: anime.episodes ?? 0,
    description: anime.description ?? '',
    bannerImage: anime.bannerImage,
    genres: anime.genres,
    averageScore: anime.averageScore,
  };
};

export async function getAnime({ id }: getAnimeArgs) {
  const client = createApolloClient();
  const { data, error } = await client.query({
    query: gql`
      query DetailPageQuery($id: Int) {
        Media(id: $id, type: ANIME) {
          id
          title {
            romaji
            english
          }
          description(asHtml: false)
          episodes

          coverImage {
            extraLarge
          }
          bannerImage
          genres
          averageScore
        }
      }
    `,
    variables: {
      id,
    },
  });

  if (error) {
    console.error(error);
  }
  console.log(data);
  return mapper(data.Media);
}
