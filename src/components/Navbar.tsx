import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Leaf, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { t, toggle, lang } = useLanguage();

  const links = [
    { href: '#features', label: t('Science', 'العلم') },
    { href: '#products', label: t('Products', 'المنتجات') },
    { href: '#gallery', label: t('Gallery', 'المعرض') },
    { href: '#contact', label: t('Consult', 'استشارة') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold text-primary tracking-wide">Botanique</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggle}
            className="gap-1.5 text-muted-foreground"
          >
            <Globe className="h-4 w-4" />
            {lang === 'en' ? 'عربي' : 'EN'}
          </Button>
          <Button size="sm" asChild>
            <a href="#products">{t('Shop Now', 'تسوق الآن')}</a>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
