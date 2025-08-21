import { SimpleGrid } from '@chakra-ui/react';
import AnimeCard from './anime-card';
import { AnimeBase } from '@/app/anime/types';

type AnimeGridProps = {
  animeList: AnimeBase[];
};

const AnimeGrid = ({ animeList }: AnimeGridProps) => {
  return (
    <SimpleGrid gap={4} minChildWidth='250px' placeItems='center'>
      {animeList.map((anime) => (
        <AnimeCard {...anime} key={anime.id} />
      ))}
    </SimpleGrid>
  );
};
export default AnimeGrid;
