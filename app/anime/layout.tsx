import Profile from '@/components/profile';
import { getSession } from '@/lib/session';
import { Box, Flex, Heading, HStack, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const AnimeLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await getSession();

  if (!user) {
    redirect('/');
  }
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
        <Link href='/anime'>
          <Heading as='h1'>Anime</Heading>
        </Link>
        <Spacer />
        <HStack gap={2}>
          <Box>
            {user.username}({user.role})
          </Box>
          <Profile username={user.username} role={user.role} />
        </HStack>
      </Flex>
      {children}
      <Flex as='footer' justifyContent='center' py='16px'>
        Web Challenge V3.5
      </Flex>
    </>
  );
};
export default AnimeLayout;
