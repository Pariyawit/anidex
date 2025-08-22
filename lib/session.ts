import { cookies } from 'next/headers';

export async function createSession(username: string, role: string) {
  const cookieStore = await cookies();
  cookieStore.set('username', username);
  cookieStore.set('role', role);

  return { username, role };
}

export async function getSession() {
  const cookieStore = await cookies();
  const username = cookieStore.get('username')?.value;
  const role = cookieStore.get('role')?.value;

  if (username && role) {
    return username && role ? { username, role } : null;
  }

  return null;
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('username');
  cookieStore.delete('role');
}
