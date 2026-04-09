import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { FlaskConical, Leaf, ShieldCheck, Microscope, Droplets, Sun } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: FlaskConical,
      title: t('Clinical-Grade Actives', 'مكونات فعّالة طبياً'),
      desc: t('Pharmaceutical-grade retinol, peptides, and acids at optimal concentrations.', 'ريتينول وببتيدات وأحماض بتركيزات مثالية بدرجة صيدلانية.'),
    },
    {
      icon: Leaf,
      title: t('Natural Botanicals', 'نباتات طبيعية'),
      desc: t('Sustainably sourced plant extracts that nourish and protect your skin barrier.', 'مستخلصات نباتية من مصادر مستدامة تغذي وتحمي حاجز بشرتك.'),
    },
    {
      icon: ShieldCheck,
      title: t('Dermatologist Tested', 'مختبر من أطباء الجلد'),
      desc: t('Every formula approved by board-certified dermatologists for safety and efficacy.', 'كل تركيبة معتمدة من أطباء جلد معتمدين للسلامة والفعالية.'),
    },
    {
      icon: Microscope,
      title: t('Lab Verified Results', 'نتائج مُثبتة مخبرياً'),
      desc: t('Independent clinical trials showing visible improvement in 4 weeks.', 'تجارب سريرية مستقلة تُظهر تحسناً ملحوظاً خلال 4 أسابيع.'),
    },
    {
      icon: Droplets,
      title: t('Advanced Hydration', 'ترطيب متقدم'),
      desc: t('Multi-weight hyaluronic acid complex for deep, lasting hydration.', 'مركب حمض الهيالورونيك متعدد الأوزان لترطيب عميق ودائم.'),
    },
    {
      icon: Sun,
      title: t('UV Protection Science', 'علم الحماية من الأشعة'),
      desc: t('Broad-spectrum antioxidant shields against environmental damage.', 'درع مضاد للأكسدة واسع الطيف ضد الأضرار البيئية.'),
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            {t('The Science', 'العلم')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {t('Why Botanique Works', 'لماذا تنجح بوتانيك')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Every product is backed by peer-reviewed research and formulated with precision.',
              'كل منتج مدعوم بأبحاث محكّمة ومصاغ بدقة.'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:glow-primary transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
