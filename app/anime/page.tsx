import { getAnimeList } from '@/apollo/get-anime-list';
import { Container } from '@chakra-ui/react';
import { AnimeBase } from './types';
import PaginationBar from '@/components/pagination-bar';
import AnimeList from '@/components/anime-list';

export type AnimePageData = {
  pageInfo: {
    total: number;
  };
  animeList: AnimeBase[];
};

const PAGE_SIZE = 20;
const DEFAULT_PAGE = 1;

type AnimePageProps = {
  searchParams: Promise<{ page?: string }>;
};

const AnimePage = async ({ searchParams }: AnimePageProps) => {
  const page = parseInt((await searchParams).page ?? '1', 10);

  const data: AnimePageData = await getAnimeList({
    page,
    pageSize: PAGE_SIZE,
  });

  return (
    <Container maxWidth='6xl'>
      <AnimeList animeList={data.animeList} />
      <PaginationBar
        total={data.pageInfo.total}
        pageSize={PAGE_SIZE}
        page={page}
        defaultPage={DEFAULT_PAGE}
      />
    </Container>
  );
};

export default AnimePage;
