'use client';
import { AuthResponse, signInOrUpdate } from '@/actions/auth';
import { Input, Button, Field, Card, Heading } from '@chakra-ui/react';
import Form from 'next/form';
import { useRouter } from 'next/navigation';
import { useActionState } from 'react';

const initialState: AuthResponse = { success: false };

type LoginFormProps = {
  from?: string;
};

const LoginForm = ({ from = '/anime' }: LoginFormProps) => {
  const router = useRouter();
  const [_, formAction, isPending] = useActionState<AuthResponse, FormData>(
    async (_, formData) => {
      const [result] = await Promise.all([signInOrUpdate(formData)]);

      if (result.success) {
        router.push(from);
      }

      return result;
    },
    initialState
  );
  return (
    <Form action={formAction}>
      <Card.Root colorPalette='orange'>
        <Card.Header>
          <Heading>Welcome</Heading>
        </Card.Header>
        <Card.Body>
          <Field.Root required>
            <Field.Label>
              Username <Field.RequiredIndicator />
            </Field.Label>
            <Input
              name='username'
              placeholder='Enter your username'
              required
              disabled={isPending}
            />
          </Field.Root>
          <Field.Root required mt={2}>
            <Field.Label>
              Role <Field.RequiredIndicator />
            </Field.Label>
            <Input
              name='role'
              placeholder='Enter your role'
              required
              disabled={isPending}
            />
          </Field.Root>
        </Card.Body>
        <Card.Footer>
          <Button type='submit' width='100%' disabled={isPending}>
            {isPending ? '...' : 'Enter'}
          </Button>
        </Card.Footer>
      </Card.Root>
    </Form>
  );
};
export default LoginForm;
