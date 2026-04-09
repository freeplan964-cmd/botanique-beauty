import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Leaf, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useCallback } from 'react';

const Navbar = () => {
  const { t, toggle, lang } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#features', label: t('Science', 'العلم') },
    { href: '#products', label: t('Products', 'المنتجات') },
    { href: '#gallery', label: t('Gallery', 'المعرض') },
    { href: '#contact', label: t('Consult', 'استشارة') },
  ];

  const handleNav = useCallback((href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollLink = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    handleNav(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2"
        >
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold text-primary tracking-wide">Botanique</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={scrollLink(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={toggle} className="gap-1.5 text-muted-foreground">
            <Globe className="h-4 w-4" />
            {lang === 'en' ? 'عربي' : 'EN'}
          </Button>
          <Button size="sm" className="hidden sm:inline-flex" asChild>
            <a href="#products" onClick={scrollLink('#products')}>{t('Shop Now', 'تسوق الآن')}</a>
          </Button>
          {/* Hamburger */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="flex flex-col gap-1 p-4">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={scrollLink(link.href)}
                  className="py-3 px-4 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button size="sm" className="mt-2 w-full" asChild>
                <a href="#products" onClick={scrollLink('#products')}>{t('Shop Now', 'تسوق الآن')}</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
