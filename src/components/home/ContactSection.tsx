import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, Briefcase, MapPin, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const serviceOptions = [
    { value: 'supplies', label: t.sectors.supplies.title },
    { value: 'fmcg', label: t.sectors.fmcg.title },
    { value: 'agriculture', label: t.sectors.agriculture.title },
    { value: 'construction', label: t.sectors.construction.title },
    { value: 'it', label: t.sectors.it.title },
    { value: 'general-services', label: t.sectors.generalServices.title },
    { value: 'real-estate', label: t.sectors.realEstate.title },
    { value: 'company-formation', label: t.sectors.companyFormation.title },
  ];

  const pick = <T,>(m: { ar: T; en: T; fr: T; zh: T }) =>
    m[(language as 'ar'|'en'|'fr'|'zh')] ?? m.en;

  const serviceLabel = pick({ ar: 'الخدمة', en: 'Service', fr: 'Service', zh: '服务' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailPart = formData.email ? `${t.contact.form.email}: ${formData.email}%0A` : '';
    const servicePart = formData.service ? `${serviceLabel}: ${serviceOptions.find(s => s.value === formData.service)?.label || formData.service}%0A` : '';
    const message = `${t.contact.form.name}: ${formData.name}%0A${emailPart}${t.contact.form.phone}: ${formData.phone}%0A${servicePart}${t.contact.form.message}: ${formData.message}`;
    window.open(`https://wa.me/23565555504?text=${message}`, '_blank');
  };

  const handleEmailSubmit = () => {
    toast.success(pick({
      ar: 'تم إرسال رسالتك بنجاح!',
      en: 'Your message has been sent successfully!',
      fr: 'Votre message a été envoyé avec succès !',
      zh: '您的消息已成功发送！',
    }));
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 scroll-mt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-8 md:p-10 text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                {pick({ ar: 'تواصل معنا', en: 'Contact Us', fr: 'Nous Contacter', zh: '联系我们' })}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {pick({ ar: 'نحن هنا لمساعدتك', en: 'We are here to help', fr: 'Nous sommes là pour vous aider', zh: '我们随时为您提供帮助' })}
              </h2>
              <p className="mb-8 text-sm md:text-base text-primary-foreground">
                {t.contact.subtitle}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">{t.contact.info.address}</p>
                    <p className="text-white/70 text-sm">
                      {pick({ ar: 'جمهورية تشاد، مدينة نجامينا', en: "Republic of Chad, City of N'djamena", fr: "République du Tchad, ville de N'Djamena", zh: '乍得共和国，恩贾梅纳市' })}
                    </p>
                    <p className="text-white/70 text-sm px-0 mx-[12px]">
                      {pick({ ar: 'ص.ب. 7514', en: 'BP: 7514', fr: 'BP : 7514', zh: '邮箱信箱：7514' })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{pick({ ar: 'الهاتف', en: 'Phone', fr: 'Téléphone', zh: '电话' })}</p>
                    <a href="tel:+23522533242" className="text-white/70 text-sm hover:text-accent transition-colors block" dir="ltr">
                      +235-22 53 32 42
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Smartphone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{pick({ ar: 'محمول', en: 'Mobile', fr: 'Mobile', zh: '手机' })}</p>
                    <a href="https://wa.me/23565555504" className="text-white/70 text-sm hover:text-accent transition-colors block" dir="ltr">
                      +235-65 55 55 04
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.contact.info.email}</p>
                    <a href="mailto:info@globizsupplies.com" className="text-white/70 text-sm hover:text-accent transition-colors">
                      info@globizsupplies.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form with WhatsApp header */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border/50"
          >
            {/* WhatsApp header */}
            <div className="text-center mb-8">
              <a
                href={`https://wa.me/23565555504?text=${encodeURIComponent(pick({ ar: 'مرحباً! لقد ضغطت على أيقونة الواتساب من الصفحة الرئيسية لموقعكم. أرغب في التواصل معكم ومعرفة المزيد عن خدماتكم. شكراً لكم!', en: 'Hello! I clicked the WhatsApp icon from the home page of your website. I would like to get in touch and learn more about your services. Thank you!', fr: "Bonjour ! J'ai cliqué sur l'icône WhatsApp depuis la page d'accueil de votre site. Je souhaite vous contacter et en savoir plus sur vos services. Merci !", zh: '您好！我从贵公司网站主页点击了 WhatsApp 图标。我希望与您联系，了解更多关于您服务的信息。谢谢！' }))}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-14 h-14 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 cursor-pointer"
              >
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {pick({ ar: 'تواصل عبر الواتساب', en: 'Contact via WhatsApp', fr: 'Contact via WhatsApp', zh: '通过 WhatsApp 联系' })}
              </h3>
              <p className="text-popover-foreground text-base">
                {pick({ ar: 'املأ النموذج وسنتواصل معك عبر الواتساب فوراً', en: 'Fill the form and we will contact you via WhatsApp', fr: 'Remplissez le formulaire et nous vous contacterons via WhatsApp', zh: '填写表单，我们将立即通过 WhatsApp 与您联系' })}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  placeholder={`${t.contact.form.name} *`}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-xl border-border/50 focus:border-accent bg-muted/30 text-sm"
                  required
                />
              </div>

              <div className="relative">
                <Input
                  type="email"
                  placeholder={t.contact.form.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-xl border-border/50 focus:border-accent bg-muted/30 text-sm"
                />
              </div>

              <div className="relative">
                <Input
                  type="tel"
                  placeholder={`${t.contact.form.phone} *`}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 rounded-xl border-border/50 focus:border-accent bg-muted/30 text-sm"
                  required
                />
              </div>

              <div className="relative">
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl border-border/50 focus:border-accent bg-muted/30 text-sm">
                    <SelectValue placeholder={pick({ ar: 'الخدمة المطلوبة', en: 'Select a service', fr: 'Sélectionnez un service', zh: '选择服务' })} />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="relative">
                <Textarea
                  placeholder={t.contact.form.message}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl border-border/50 focus:border-accent resize-none bg-muted/30 text-sm"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="flex-1 h-12 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 font-semibold shadow-lg hover:shadow-xl transition-all text-sm"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t.contact.form.whatsapp}
                </Button>
                <Button 
                  type="button"
                  onClick={handleEmailSubmit}
                  size="lg" 
                  variant="outline"
                  className="flex-1 h-12 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white gap-2 font-semibold transition-all text-sm"
                >
                  <Send className="h-4 w-4" />
                  {t.contact.form.emailOption}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
