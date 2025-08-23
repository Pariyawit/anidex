'use client';
import { Dialog, CloseButton, Flex, Portal } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Prose } from './ui/prose';
import { Anime } from '@/app/anime/types';
import { useEffect } from 'react';

const AnimeModal = ({ title, description, image }: Anime) => {
  const router = useRouter();

  useEffect(() => {
    const scrollY = document.body.getAttribute('data-scroll-y');
    document.body.style.top = `-${scrollY}px`;
    return () => {
      document.body.style.top = '0';
    };
  }, []);

  return (
    <Dialog.Root
      scrollBehavior='inside'
      open={true}
      onInteractOutside={router.back}
    >
      {/* Modal */}
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title fontSize='xl'>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body asChild>
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
              <CloseButton size='sm' onClick={() => router.back()} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
export default AnimeModal;
