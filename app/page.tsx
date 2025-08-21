import LoginForm from '@/components/login-form';
import { getSession } from '@/lib/session';
import { Container, Heading, Text } from '@chakra-ui/react';
import { redirect, useRouter } from 'next/navigation';

export default async function Home() {
  const user = await getSession();

  if (user) {
    redirect('/anime');
  }

  return (
    <Container maxW='md'>
      <Heading>Welcome</Heading>
      <LoginForm />
    </Container>
  );
}
