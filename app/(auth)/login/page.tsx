'use client';
import { Container } from '@chakra-ui/react';
import { AuthResponse } from '@/actions/auth';
import LoginForm from '@/components/login-form';

const initialState: AuthResponse = { success: false };
const defaultPath = '/anime';

const LoginPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const from = (await searchParams).from as string;
  return (
    <Container>
      <LoginForm from={from} />
    </Container>
  );
};
export default LoginPage;
