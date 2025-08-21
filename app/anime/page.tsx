import { getAnimeList } from '@/apollo/get-anime-list';
import { Card, Container } from '@chakra-ui/react';
import { AnimeBase } from './types';
import PaginationBar from '@/components/pagination';
import AnimeList from '@/components/anime-list';
import { Suspense } from 'react';

export type AnimePageData = {
  pageInfo: {
    total: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
  };
  animeList: AnimeBase[];
};

const PAGE_SIZE = 20;
const DEFAULT_PAGE = 1;

type AnimePageProps = {
  searchParams: { page?: string };
};

const AnimePage = async ({ searchParams }: AnimePageProps) => {
  const page = parseInt((await searchParams).page ?? '1', 10);

  const data: AnimePageData = await getAnimeList({
    page,
    pageSize: PAGE_SIZE,
  });

  const cards = Array.from({ length: PAGE_SIZE }).map((_, index) => (
    <Card.Root
      key={index}
      width='230px'
      height='500px'
      colorPalette='gray'
    ></Card.Root>
  ));

  return (
    <Container>
      <Suspense fallback={cards}>
        <AnimeList page={page} pageSize={PAGE_SIZE} />
      </Suspense>
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
