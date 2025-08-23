import { SimpleGrid } from '@chakra-ui/react';
import AnimeCard from './anime-card';
import { AnimeBase } from '@/app/anime/types';
import Link from 'next/link';

type AnimeGridProps = {
  animeList: AnimeBase[];
};

const AnimeList = async ({ animeList }: AnimeGridProps) => {
  return (
    <SimpleGrid gap={4} minChildWidth='250px' placeItems='center'>
      {animeList.map((anime) => (
        <Link href={`anime/${anime.id}`} key={anime.id}>
          <AnimeCard
            description={anime.description}
            episodes={anime.episodes}
            id={anime.id}
            image={anime.image}
            title={anime.title}
            key={anime.id}
          />
        </Link>
      ))}
    </SimpleGrid>
  );
};
export default AnimeList;
