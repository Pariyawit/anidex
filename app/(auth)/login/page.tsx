'use client';
import Form from 'next/form';
import { Button, Container, Input } from '@chakra-ui/react';
import { useActionState } from 'react';
import { AuthResponse, signInOrUpdate } from '@/actions/auth';
import { useRouter } from 'next/navigation';

const initialState: AuthResponse = { success: false };
const defaultPath = '/anime';

const LoginPage = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState<AuthResponse, FormData>(
    async (_, formData) => {
      const [result, params] = await Promise.all([
        signInOrUpdate(formData),
        searchParams,
      ]);

      if (result.success) {
        const from = (params?.from as string) ?? defaultPath;
        router.push(from);
        router.refresh();
      }

      return result;
    },
    initialState
  );

  return (
    <Container>
      state: {state.success}
      isPending: {isPending}
      <Form action={formAction}>
        <Input name='username' placeholder='Enter your username' />
        <Input name='role' placeholder='Enter your role' />
        <Button type='submit' minW={120}>
          Enter
        </Button>
      </Form>
    </Container>
  );
};
export default LoginPage;
