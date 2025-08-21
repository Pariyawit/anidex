import { getAnimeList } from '@/apollo/get-anime-list';
import { Card, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { AnimeBase } from './types';
import AnimeCard from '@/components/anime-card';

export type AnimePageData = {
  pageInfo: {
    total: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
  };
  animeList: AnimeBase[];
};

const AnimePage = async () => {
  const data: AnimePageData = await getAnimeList({ page: 0, perPage: 20 });
  return (
    <Container>
      <SimpleGrid gap={4} minChildWidth='250px' placeItems='center'>
        {data.animeList.map((anime) => (
          <AnimeCard {...anime} key={anime.id} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default AnimePage;
