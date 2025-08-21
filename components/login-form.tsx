'use client';
import { AuthResponse, signInOrUpdate } from '@/actions/auth';
import { Input, Button, Field } from '@chakra-ui/react';
import Form from 'next/form';
import { useRouter } from 'next/navigation';
import { useActionState } from 'react';

const initialState: AuthResponse = { success: false };

type LoginFormProps = {
  from?: string;
};

const LoginForm = ({ from = '/anime' }: LoginFormProps) => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState<AuthResponse, FormData>(
    async (_, formData) => {
      const [result] = await Promise.all([signInOrUpdate(formData)]);

      if (result.success) {
        router.push(from);
        router.refresh();
      }

      return result;
    },
    initialState
  );
  return (
    <Form action={formAction}>
      <Field.Root required>
        <Field.Label>
          Username <Field.RequiredIndicator />
        </Field.Label>
        <Input name='username' placeholder='Enter your username' required />
      </Field.Root>
      <Field.Root required>
        <Field.Label>
          Role <Field.RequiredIndicator />
        </Field.Label>
        <Input name='role' placeholder='Enter your role' required />
      </Field.Root>
      <Button type='submit' minW={120}>
        Enter
      </Button>
    </Form>
  );
};
export default LoginForm;
