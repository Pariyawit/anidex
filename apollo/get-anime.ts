import { gql } from '@apollo/client';
import createApolloClient from './client';

type getAnimeArgs = {
  id: number;
};

export async function getAnime({ id }: getAnimeArgs) {
  const client = createApolloClient();
  const { data, error } = await client.query({
    query: gql`
      query DetailPageQuery($id: Int) {
        Media(id: $id, type: ANIME) {
          # 1. Unique ID
          id
          # 2. Both Romaji and English titles for more context
          title {
            romaji
            english
          }
          # 3. A larger, higher-quality cover image
          coverImage {
            extraLarge
          }
          # 4. A banner image, great for the top of a detail page
          bannerImage
          # 5. The synopsis/description (requesting plain text)
          description(asHtml: false)
          # 6. A list of associated genres
          genres
          # 7. The average user score out of 100
          averageScore
          # 8. The main animation studio
          studios(isMain: true) {
            nodes {
              name
            }
          }
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
  // TODO: Map to better type
  return data.Media;
}
