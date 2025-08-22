import LoginForm from '@/components/login-form';
import { getSession } from '@/lib/session';
import { Container } from '@chakra-ui/react';
import { redirect } from 'next/navigation';

export default async function Home() {
  const user = await getSession();

  if (user) {
    redirect('/anime');
  }

  return (
    <Container maxW='md' pt='10%'>
      <LoginForm />
    </Container>
  );
}
