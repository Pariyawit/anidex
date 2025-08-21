'use server';

import { createSession, deleteSession } from '@/lib/session';
import { redirect } from 'next/navigation';

export type AuthResponse = {
  success: boolean;
};

export const signInOrUpdate = async (
  formData: FormData
): Promise<AuthResponse> => {
  try {
    const data = {
      username: formData.get('username') as string,
      role: formData.get('username') as string,
    };

    await createSession(data.username, data.role);

    return { success: true };
  } catch (error) {
    console.error(error);
  }

  return { success: false };
};

export const signOut = async (): Promise<AuthResponse> => {
  try {
    await deleteSession();
    return { success: true };
  } catch (error) {
    console.error(error);
  } finally {
    redirect('/');
  }

  return { success: false };
};
