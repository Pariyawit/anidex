import { getPage } from '@/apollo/get-page';
import { Container, Heading } from '@chakra-ui/react';

export default async function Home() {
  const data = await getPage({ page: 0, perPage: 10 });
  console.log(data);
  return (
    <Container>
      <Heading>Hello World</Heading>
    </Container>
  );
}
