import * as React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { BackToTop } from './BackToTop';
import { Toaster } from 'sonner';

export const Layout = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
      <Toaster position="top-center" richColors />
    </div>
  );
};
