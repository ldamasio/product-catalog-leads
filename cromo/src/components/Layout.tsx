import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../app/globals.css';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
