'use client';
import { AuthResponse, signInOrUpdate, signOut } from '@/actions/auth';
import {
  Input,
  Button,
  Field,
  Dialog,
  Avatar,
  Portal,
  CloseButton,
  Spacer,
} from '@chakra-ui/react';
import Form from 'next/form';
import { useActionState, useState } from 'react';

const initialState: AuthResponse = { success: false };

type ProfileProps = {
  username: string;
  role: string;
};

const Profile = ({ username, role }: ProfileProps) => {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState<AuthResponse, FormData>(
    async (_prevState, formData) => {
      const result = await signInOrUpdate(formData);
      setOpen(false);
      return result;
    },
    initialState
  );
  return (
    <Dialog.Root open={open} onInteractOutside={() => setOpen(false)} size='sm'>
      <Dialog.Trigger asChild>
        <Avatar.Root
          onClick={() => setOpen(true)}
          _hover={{ cursor: 'pointer', border: '2px gray solid' }}
        >
          <Avatar.Fallback name={username} />
        </Avatar.Root>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Profile</Dialog.Title>
            </Dialog.Header>
            <Form action={formAction} width='200px'>
              <Dialog.Body>
                <Field.Root required>
                  <Field.Label>
                    Username <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    defaultValue={username}
                    name='username'
                    placeholder='Enter your username'
                    required
                    disabled={isPending}
                    css={{ '--focus-color': 'orange' }}
                  />
                </Field.Root>
                <Field.Root required mt={2}>
                  <Field.Label>
                    Role <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    defaultValue={role}
                    name='role'
                    placeholder='Enter your role'
                    required
                    disabled={isPending}
                    css={{ '--focus-color': 'orange' }}
                  />
                </Field.Root>
              </Dialog.Body>
              <Dialog.Footer>
                <Button colorPalette='red' onClick={signOut} size='sm'>
                  Logout
                </Button>
                <Spacer />
                <Button
                  disabled={isPending}
                  onClick={() => setOpen(false)}
                  variant='outline'
                  size='sm'
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  loading={isPending}
                  size='sm'
                  colorPalette='orange'
                >
                  Save
                </Button>
              </Dialog.Footer>
            </Form>
            <Dialog.CloseTrigger asChild>
              <CloseButton size='sm' onClick={() => setOpen(false)} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
export default Profile;
