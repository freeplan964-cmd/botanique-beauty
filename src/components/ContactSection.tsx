import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, CalendarCheck, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('Subscribed successfully!', 'تم الاشتراك بنجاح!'));
    setEmail('');
  };

  const handleConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('Consultation request sent!', 'تم إرسال طلب الاستشارة!'));
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 glow-primary"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {t('Join Our Newsletter', 'انضم لنشرتنا البريدية')}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              {t(
                'Get exclusive skincare tips, early access to new products, and 15% off your first order.',
                'احصل على نصائح حصرية للعناية بالبشرة ووصول مبكر للمنتجات الجديدة وخصم 15% على طلبك الأول.'
              )}
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-3">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('your@email.com', 'بريدك@الإلكتروني.com')}
                className="flex-1"
              />
              <Button type="submit" className="gap-1.5">
                <Send className="h-4 w-4" />
                {t('Subscribe', 'اشترك')}
              </Button>
            </form>
          </motion.div>

          {/* Consultation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 glow-gold"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <CalendarCheck className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {t('Book Dermatology Consultation', 'احجز استشارة جلدية')}
              </h3>
            </div>
            <form onSubmit={handleConsultation} className="space-y-4">
              <Input placeholder={t('Full Name', 'الاسم الكامل')} required />
              <Input type="email" placeholder={t('Email Address', 'البريد الإلكتروني')} required />
              <Input type="tel" placeholder={t('Phone Number', 'رقم الهاتف')} />
              <Textarea
                placeholder={t('Tell us about your skin concerns...', 'أخبرنا عن مشاكل بشرتك...')}
                rows={3}
              />
              <Button type="submit" className="w-full gap-1.5" variant="secondary">
                <CalendarCheck className="h-4 w-4" />
                {t('Request Consultation', 'طلب استشارة')}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
