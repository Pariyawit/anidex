import type { Metadata } from 'next';
import { Provider } from '@/components/ui/provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'AniDex',
  description: 'Anime Index',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
