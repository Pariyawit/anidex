import { gql } from '@apollo/client';
import createApolloClient from './client';

type getPageArgs = {
  page: number;
  perPage: number;
};

export async function getPage({ page, perPage }: getPageArgs) {
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
            # 4. The format (e.g., TV, Movie)
            format
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

  //TODO: Map

  return data.Page;
}
