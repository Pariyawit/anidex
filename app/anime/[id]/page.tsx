import { getAnime } from '@/apollo/get-anime';
import { Prose } from '@/components/ui/prose';
import { Container, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

const AnimePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const {
    title,
    image,
    episodes,
    description,
    bannerImage,
    genres,
    averageScore,
  } = await getAnime({ id: parseInt(id, 10) });

  return (
    <Container maxW='3xl'>
      <Image src={bannerImage} width={1200} height={400} alt={title} />
      <Heading>{title}</Heading>
      <Text>{episodes} episodes</Text>
      <Text>{genres.join(' | ')}</Text>
      <Text>{averageScore}%</Text>
      <Text asChild>
        <Prose dangerouslySetInnerHTML={{ __html: description }} />
      </Text>
    </Container>
  );
};
export default AnimePage;
