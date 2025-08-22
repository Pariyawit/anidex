'use client';
import { AnimeBase } from '@/app/anime/types';
import {
  Card,
  Text,
  Dialog,
  Portal,
  Button,
  Flex,
  CloseButton,
  Box,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Prose } from './ui/prose';
import { useState } from 'react';

export const CARD_WIDTH = '230px';
export const CARD_HEIGHT = '550px';

const AnimeCard = ({ title, image, episodes, description }: AnimeBase) => {
  const [open, setOpen] = useState(false);

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
    <Dialog.Root
      scrollBehavior='inside'
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Dialog.Trigger asChild>
        <Card.Root
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
          _hover={{ cursor: 'pointer', borderColor: 'orange' }}
          overflow='hidden'
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
            <Dialog.Trigger asChild>
              <Button
                size='xs'
                variant='plain'
                p={0}
                fontWeight='bold'
                color='orange.500'
              >
                View More
              </Button>
            </Dialog.Trigger>
          </Card.Footer>
        </Card.Root>
      </Dialog.Trigger>

      {/* Modal */}
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title fontSize='xl'>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body height={400} asChild>
              <Flex gap={2} direction='column' alignItems='center'>
                <Image
                  src={image}
                  alt={title}
                  width={230}
                  height={300}
                  loading='lazy'
                  style={{ objectFit: 'cover' }}
                />
                <Prose dangerouslySetInnerHTML={{ __html: description }} />
              </Flex>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size='sm' onClick={() => setOpen(false)} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
export default AnimeCard;
