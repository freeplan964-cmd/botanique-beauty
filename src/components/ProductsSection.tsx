import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Star, ShoppingBag } from 'lucide-react';
import productRetinol from '@/assets/product-retinol.jpg';
import productMoisturizer from '@/assets/product-moisturizer.jpg';
import productVitaminC from '@/assets/product-vitaminc.jpg';
import productHyaluronic from '@/assets/product-hyaluronic.jpg';

const ProductsSection = () => {
  const { t } = useLanguage();

  const products = [
    {
      img: productRetinol,
      name: t('Retinol Night Cream', 'كريم الريتينول الليلي'),
      desc: t('0.5% encapsulated retinol for gentle yet effective renewal.', 'ريتينول مغلف 0.5% لتجديد لطيف وفعّال.'),
      price: '$68',
      oldPrice: '$85',
      rating: 4.9,
      badge: t('Bestseller', 'الأكثر مبيعاً'),
    },
    {
      img: productMoisturizer,
      name: t('Barrier Repair Moisturizer', 'مرطب إصلاح الحاجز'),
      desc: t('Ceramide-rich formula to restore and strengthen skin barrier.', 'تركيبة غنية بالسيراميد لاستعادة وتقوية حاجز البشرة.'),
      price: '$54',
      oldPrice: '$70',
      rating: 4.8,
      badge: t('New', 'جديد'),
    },
    {
      img: productVitaminC,
      name: t('Vitamin C Brightening Serum', 'سيروم فيتامين سي المضيء'),
      desc: t('15% L-Ascorbic acid for radiant, even-toned complexion.', 'حمض الأسكوربيك 15% لبشرة مشرقة وموحدة اللون.'),
      price: '$72',
      oldPrice: '$90',
      rating: 4.9,
      badge: null,
    },
    {
      img: productHyaluronic,
      name: t('Hyaluronic Acid Serum', 'سيروم حمض الهيالورونيك'),
      desc: t('Triple-weight HA complex for deep multi-layer hydration.', 'مركب حمض الهيالورونيك ثلاثي الوزن لترطيب عميق متعدد الطبقات.'),
      price: '$46',
      oldPrice: '$58',
      rating: 4.7,
      badge: null,
    },
  ];

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wide uppercase">
            {t('Shop', 'تسوق')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {t('Our Bestselling Collection', 'مجموعتنا الأكثر مبيعاً')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('Clinically tested. Dermatologist approved. Loved by thousands.', 'مختبرة سريرياً. معتمدة من أطباء الجلد. محبوبة من الآلاف.')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:glow-gold transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className={`h-3.5 w-3.5 ${s < Math.floor(p.rating) ? 'text-secondary fill-secondary' : 'text-border'}`} />
                  ))}
                  <span className="text-xs text-muted-foreground ms-1">{p.rating}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">{p.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-xl font-bold text-primary">{p.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{p.oldPrice}</span>
                  </div>
                  <Button size="sm" className="gap-1.5">
                    <ShoppingBag className="h-3.5 w-3.5" />
                    {t('Add', 'أضف')}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
