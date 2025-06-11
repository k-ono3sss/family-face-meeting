import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Serif_JP } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSerifJP = Noto_Serif_JP({ 
  subsets: ['latin'], 
  variable: '--font-noto-serif-jp',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: '両家顔合わせ 食事会 | 2025.06.14',
  description: '広平 & 早紀 両家顔合わせ食事会のご案内',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSerifJP.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}