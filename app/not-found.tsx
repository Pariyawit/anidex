import { Button, Container, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container maxW='md' pt='30%'>
      <Flex direction='column' gap='4' alignItems='center'>
        <Heading as='h1' fontSize='2xl'>
          Page Not Found
        </Heading>
        <Button colorPalette='orange' asChild>
          <Link href='/'>Go to Home</Link>
        </Button>
      </Flex>
    </Container>
  );
}
