import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Sparkles, ShieldCheck, FlaskConical } from 'lucide-react';
import heroImg from '@/assets/hero-serum.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  const badges = [
    { icon: FlaskConical, label: t('Clinically Proven', 'مثبت سريرياً') },
    { icon: ShieldCheck, label: t('Dermatology Backed', 'مدعوم من أطباء الجلد') },
    { icon: Sparkles, label: t('Real Results', 'نتائج حقيقية') },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-16">
      {/* Floating botanical elements */}
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-primary/20 animate-float" />
      <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-secondary/30 animate-float-slow" />
      <div className="absolute bottom-32 left-1/4 w-4 h-4 rounded-full bg-accent/15 animate-float" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex flex-wrap gap-3">
            {badges.map((b, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground glow-primary"
              >
                <b.icon className="h-3.5 w-3.5 text-primary" />
                {b.label}
              </motion.span>
            ))}
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            {t('Science-Backed Skincare for', 'العناية بالبشرة المدعومة بالعلم من أجل')}
            <span className="text-gradient-primary block">
              {t('Visible Results', 'نتائج مرئية')}
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            {t(
              'Dermatologist-developed formulas combining nature\'s finest botanicals with clinical-grade actives. See visible transformation in just 4 weeks.',
              'تركيبات طوّرها أطباء الجلدية تجمع بين أفضل النباتات الطبيعية والمكونات الفعّالة طبياً. شاهد تحولاً واضحاً خلال 4 أسابيع فقط.'
            )}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="glow-primary" asChild>
              <a href="#products">{t('Explore Products', 'اكتشف المنتجات')}</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">{t('Book Consultation', 'احجز استشارة')}</a>
            </Button>
          </div>

          <div className="flex gap-8 pt-2">
            {[
              { val: '50K+', label: t('Happy Clients', 'عملاء سعداء') },
              { val: '4.9★', label: t('Avg Rating', 'التقييم المتوسط') },
              { val: '98%', label: t('See Results', 'يرون نتائج') },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl font-bold text-primary">{s.val}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl" />
            <img
              src={heroImg}
              alt={t('Botanique Premium Serum', 'سيروم بوتانيك الفاخر')}
              width={800}
              height={1024}
              className="relative rounded-2xl shadow-2xl max-h-[600px] object-cover glow-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
