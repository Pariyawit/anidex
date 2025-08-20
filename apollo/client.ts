import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = 'https://graphql.anilist.co';

const createApolloClient = () => {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
