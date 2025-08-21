import { AnimeBase } from '@/app/anime/types';
import { Card, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';

const AnimeCard = ({ id, title, image, episodes }: AnimeBase) => {
  return (
    <Card.Root width='230px' height='500px'>
      <div
        style={{
          height: '300px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={image}
          alt={`${title} image`}
          width={230}
          height={300}
          loading='lazy'
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Card.Body>
        <Card.Title>
          <Text lineClamp='2'>{title}</Text>
        </Card.Title>
        <Text>Episodes: {episodes}</Text>
      </Card.Body>
      <Card.Footer justifyContent='flex-end'>
        {/* TODO: open modal */}
        <Button variant='outline'>View {id}</Button>
      </Card.Footer>
    </Card.Root>
  );
};
export default AnimeCard;
