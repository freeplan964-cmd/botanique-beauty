import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import heroImg from '@/assets/hero-serum.jpg';

const GallerySection = () => {
  const { t } = useLanguage();

  const images = [
    { src: gallery1, alt: t('Product Collection', 'مجموعة المنتجات'), span: 'md:col-span-2' },
    { src: gallery3, alt: t('Lab Research', 'أبحاث المختبر'), span: '' },
    { src: heroImg, alt: t('Signature Serum', 'السيروم المميز'), span: '' },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wide uppercase">
            {t('Gallery', 'المعرض')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {t('Behind the Science', 'خلف الكواليس العلمية')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`overflow-hidden rounded-xl ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
