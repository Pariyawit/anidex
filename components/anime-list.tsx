import { SimpleGrid } from '@chakra-ui/react';
import AnimeCard from './anime-card';
import { AnimeBase } from '@/app/anime/types';
import { getAnimeList } from '@/apollo/get-anime-list';
import { AnimePageData } from '@/app/anime/page';

type AnimeGridProps = {
  animeList: AnimeBase[];
};

const AnimeList = async ({ page, pageSize }) => {
  const data: AnimePageData = await getAnimeList({
    page,
    pageSize,
  });
  return (
    <SimpleGrid gap={4} minChildWidth='250px' placeItems='center'>
      {data.animeList.map((anime) => (
        <AnimeCard {...anime} key={anime.id} />
      ))}
    </SimpleGrid>
  );
};
export default AnimeList;
