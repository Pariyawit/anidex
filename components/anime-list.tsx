import { SimpleGrid } from '@chakra-ui/react';
import AnimeCard from './anime-card';
import { AnimeBase } from '@/app/anime/types';

type AnimeGridProps = {
  animeList: AnimeBase[];
};

const AnimeList = async ({ animeList }: AnimeGridProps) => {
  return (
    <SimpleGrid gap={4} minChildWidth='250px' placeItems='center'>
      {animeList.map((anime) => (
        <AnimeCard
          description={anime.description}
          episodes={anime.episodes}
          id={anime.id}
          image={anime.image}
          key={anime.id}
          title={anime.title}
        />
      ))}
    </SimpleGrid>
  );
};
export default AnimeList;
