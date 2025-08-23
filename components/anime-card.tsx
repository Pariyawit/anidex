'use client';
import { AnimeBase } from '@/app/anime/types';
import { Card, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';
import { Prose } from './ui/prose';

export const CARD_WIDTH = '230px';
export const CARD_HEIGHT = '550px';

const AnimeCard = ({ title, image, episodes, description, id }: AnimeBase) => {
  const getEpisodesText = () => {
    if (!episodes) {
      return 'n/a';
    }
    if (episodes == 1) {
      return '1 episode';
    }
    return `${episodes} episodes`;
  };

  return (
    <Card.Root
      width={CARD_WIDTH}
      height={CARD_HEIGHT}
      _hover={{ cursor: 'pointer', borderColor: 'orange' }}
      overflow='hidden'
      onClick={() => {
        document.body.setAttribute('data-scroll-y', window.scrollY.toString());
      }}
    >
      <Box w='230px' h='300px' position='relative'>
        <Image
          src={image}
          alt={title}
          fill
          loading='lazy'
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Card.Body>
        <Card.Title fontSize='md'>
          <Text lineClamp='2'>{title}</Text>
        </Card.Title>
        <Text lineClamp='3' asChild>
          <Prose dangerouslySetInnerHTML={{ __html: description }} />
        </Text>
      </Card.Body>
      <Card.Footer justifyContent='space-between'>
        <Text fontSize='xs'>{getEpisodesText()}</Text>
      </Card.Footer>
    </Card.Root>
  );
};
export default AnimeCard;
