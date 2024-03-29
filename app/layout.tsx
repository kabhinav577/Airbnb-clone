import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import ToasterProvider from './providers/ToasterProvider';

import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';

import getCurrentUser from './actions/getCurrentUser';
import SearchModal from './components/modals/SearchModal';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Airbnb | Holiday rentals, cabins, beach houses & more',
  description:
    'Airbnb | Holiday rentals, cabins, beach houses & more - clone by Krishna kant Singh',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        <SearchModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
