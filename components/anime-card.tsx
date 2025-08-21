import { AnimeBase } from '@/app/anime/types';
import { Card, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';

const AnimeCard = ({ id, title, image, episodes }: AnimeBase) => {
  return (
    <Card.Root width='230px'>
      <Image src={image} alt={`${title} image`} width={230} height={318} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Description>
        </Card.Description> */}
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
