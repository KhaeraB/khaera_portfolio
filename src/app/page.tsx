import { Metadata } from 'next';
import HeroSection from '../components/HeroSection.tsx';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Khaera_blk',
  description: 'Portfolio of my projects',
};
export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm-px-6 md:max-w-5xl'>
      <HeroSection />
    </main>
  );
}
