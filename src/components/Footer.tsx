import { useLanguage } from '@/context/LanguageContext';
import { Leaf } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5" />
            <span className="font-display text-lg font-bold tracking-wide">Botanique</span>
          </div>
          <div className="flex gap-6 text-sm opacity-80">
            <a href="#features" className="hover:opacity-100 transition-opacity">{t('Science', 'العلم')}</a>
            <a href="#products" className="hover:opacity-100 transition-opacity">{t('Products', 'المنتجات')}</a>
            <a href="#gallery" className="hover:opacity-100 transition-opacity">{t('Gallery', 'المعرض')}</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity">{t('Consult', 'استشارة')}</a>
          </div>
          <p className="text-xs opacity-60">
            © 2026 Botanique. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
