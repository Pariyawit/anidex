import { cookies } from 'next/headers';

export async function createSession(username: string, role: string) {
  const cookieStore = await cookies();
  cookieStore.set('token', `${username}:${role}`);

  return { username, role };
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (token) {
    const [username, role] = token.split(':');
    return username && role ? { username, role } : null;
  }

  return null;
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('token');
}
