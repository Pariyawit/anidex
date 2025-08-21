import { signOut } from '@/actions/auth';
import { getSession } from '@/lib/session';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import { redirect } from 'next/navigation';

const AnimeLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await getSession();
  return (
    <>
      <Flex
        as='nav'
        backgroundColor='orange.500'
        mb={8}
        h={12}
        px='32px'
        alignItems='center'
      >
        <Heading as='h1'>Anime</Heading>
        <Spacer />
        <HStack>
          <Box>
            {user?.username} – {user?.role}
          </Box>
          <Button onClick={signOut}>Logout</Button>
        </HStack>
      </Flex>
      {children}
      <Flex as='footer' justifyContent='center' py='16px'>
        Web Challenge V.3.5
      </Flex>
    </>
  );
};
export default AnimeLayout;
