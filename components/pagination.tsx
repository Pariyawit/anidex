'use client';
import { Pagination, ButtonGroup, IconButton, Flex } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import Link from 'next/link';

type PaginationBarProps = {
  pageSize: number;
  total: number;
  page: number;
  defaultPage: number;
};

const PaginationBar = ({
  pageSize,
  total,
  page,
  defaultPage,
}: PaginationBarProps) => {
  return (
    <Flex pt={4} justifyContent='center'>
      <Pagination.Root
        count={total}
        pageSize={pageSize}
        defaultPage={defaultPage}
        page={page}
      >
        <ButtonGroup variant='ghost'>
          <Pagination.PrevTrigger asChild>
            <Link href={`/anime?page=${Math.max(1, page - 1)}`}>
              <IconButton>
                <LuChevronLeft />
              </IconButton>
            </Link>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(pageItem) => (
              <Link href={`/anime?page=${pageItem.value}`} key={pageItem.value}>
                <IconButton variant={{ base: 'ghost', _selected: 'outline' }}>
                  {pageItem.value}
                </IconButton>
              </Link>
            )}
          />

          <Pagination.NextTrigger asChild>
            <Link
              href={`/anime?page=${Math.min(
                Math.ceil(total / pageSize),
                page + 1
              )}`}
            >
              <IconButton>
                <LuChevronRight />
              </IconButton>
            </Link>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Flex>
  );
};
export default PaginationBar;
