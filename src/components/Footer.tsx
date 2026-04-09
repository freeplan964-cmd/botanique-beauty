import { useLanguage } from '@/context/LanguageContext';
import { Leaf } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-10 md:py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2"
          >
            <Leaf className="h-5 w-5" />
            <span className="font-display text-lg font-bold tracking-wide">Botanique</span>
          </a>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm opacity-80">
            <a href="#features" onClick={scrollTo('#features')} className="hover:opacity-100 transition-opacity">{t('Science', 'العلم')}</a>
            <a href="#products" onClick={scrollTo('#products')} className="hover:opacity-100 transition-opacity">{t('Products', 'المنتجات')}</a>
            <a href="#gallery" onClick={scrollTo('#gallery')} className="hover:opacity-100 transition-opacity">{t('Gallery', 'المعرض')}</a>
            <a href="#contact" onClick={scrollTo('#contact')} className="hover:opacity-100 transition-opacity">{t('Consult', 'استشارة')}</a>
          </div>
          <p className="text-xs opacity-60 text-center">
            © 2026 Botanique. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
