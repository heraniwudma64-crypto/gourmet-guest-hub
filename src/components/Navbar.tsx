import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { cartCount, toggleCart } = useCart();
  const [isDark, setIsDark] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-primary-foreground font-serif text-xl font-bold group-hover:scale-110 transition-transform">
            BV
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-primary">Bella Vista</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors hover:text-primary relative py-2',
                  isActive ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:height-0.5 after:bg-primary' : 'text-foreground/80'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/80"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={toggleCart}
            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/80 relative"
            aria-label="Open shopping cart"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <Link to="/reservations" className="hidden md:block">
            <Button variant="default" className="rounded-full px-6">
              Reserve a Table
            </Button>
          </Link>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/reservations" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-2">Reserve a Table</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
