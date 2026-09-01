import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, PhoneCall, ArrowLeft, ChevronDown, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "تحصيل ديون الشركات الرياض | استرداد المستحقات باحترافية | نجد السداد",
  description: "شركة تحصيل ديون معتمدة في الرياض. نستردّ مستحقات شركتك المالية المتعثرة بأساليب قانونية واحترافية تحافظ على علاقاتك التجارية. نسبة نجاح عالية. تواصل الآن.",
  keywords: ["تحصيل ديون الرياض", "شركة تحصيل ديون الرياض", "تحصيل ديون للشركات", "استرداد ديون الشركات", "تحصيل مستحقات الرياض", "مكتب تحصيل ديون الرياض", "تحصيل ديون تجارية"],
};

const faqs = [
  { q: "ما هي نسبة نجاح نجد السداد في تحصيل ديون الشركات بالرياض؟", a: "تحقق نجد السداد معدل نجاح يتجاوز 85% في تحصيل ديون الشركات والمؤسسات بالرياض نظراً لامتلاك فريقنا خبرة قانونية ومالية متخصصة وشبكة علاقات واسعة." },
  { q: "ما أنواع الديون التجارية التي يمكنكم تحصيلها في الرياض؟", a: "نتخصص في تحصيل ديون البيع الآجل، الفواتير التجارية المتأخرة، عقود الخدمات، الديون البنكية، والمستحقات الإيجارية وغيرها من الديون التجارية في الرياض." },
  { q: "هل تحافظون على العلاقات التجارية مع المدينين أثناء التحصيل؟", a: "نعم، نحرص على استخدام أساليب احترافية ومتحضرة في تحصيل الديون تحافظ على العلاقات التجارية بين الدائن والمدين مع ضمان استرداد المستحقات كاملة." },
  { q: "ما الوقت المعتاد لاسترداد الديون التجارية في الرياض؟", a: "يتراوح وقت التحصيل بين أسبوعين وستة أشهر حسب حجم الدين وطبيعة المدين واستعداده للتسوية. نحرص على إنهاء العملية في أسرع وقت ممكن." },
];

export default function TahseelDoyoonPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-32 pb-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute -top-20 left-0 w-96 h-96 bg-saddad-gold/5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saddad-gold/10 border border-saddad-gold/20 mb-5">
            <Landmark size={14} className="text-saddad-gold" />
            <span className="text-xs font-bold text-saddad-gold">شركة تحصيل ديون معتمدة في الرياض</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-5">
            تحصيل ديون الشركات<br/>
            <span className="text-saddad-gold">باحترافية وسرعة في الرياض</span>
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-3xl mb-10 leading-relaxed">
            هل تعاني شركتك من ديون متعثرة ومستحقات غير محصّلة؟ فريق نجد السداد المتخصص في تحصيل الديون بالرياض يضمن استرداد أموالك بأساليب قانونية ومهنية تحافظ على علاقاتك التجارية وسمعتك في السوق.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/00966570856657" className="bg-saddad-gold text-slate-950 text-center px-8 py-4 rounded-xl font-bold hover:bg-saddad-gold-light transition-all flex items-center justify-center gap-2 shadow-lg">
              <PhoneCall size={20} /> استردّ أموالك الآن
            </a>
            <Link href="/contact" className="bg-white text-slate-800 border-2 border-slate-200 text-center px-8 py-4 rounded-xl font-bold hover:border-saddad-gold transition-all flex items-center justify-center gap-2">
              <ArrowLeft size={18} /> تقييم مجاني لحالتك
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-10 text-right">الشركات التي نخدمها في تحصيل الديون بالرياض</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["الشركات التجارية", "المستشفيات والعيادات", "شركات المقاولات", "الوكالات التجارية", "المصانع والمنتجون", "شركات الخدمات", "محلات البيع بالتجزئة", "المؤسسات التعليمية", "شركات التقنية", "العقاريون والمطورون", "الموردون والموزعون", "المكاتب الاستشارية"].map((c, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-saddad-gold shrink-0" />
              <span className="text-xs font-medium text-slate-700">{c}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 text-right space-y-8 text-slate-700 font-light leading-loose">
        <h2 className="text-2xl font-bold text-slate-900">أفضل شركة تحصيل ديون الرياض</h2>
        <p>تُعدّ الديون التجارية المتعثرة من أكبر التهديدات التي تواجه تدفق السيولة النقدية في الشركات والمؤسسات. تتولى نجد السداد كأفضل <strong>شركة تحصيل ديون الرياض</strong> إدارة ملفات التحصيل بشكل كامل. باعتبارنا <strong>مكتب تحصيل ديون الرياض</strong> معتمد، نقوم ببدء التواصل الأولي مع المدين ومروراً بالمفاوضات وصولاً للتحصيل الفعلي لضمان <strong>استرداد ديون الشركات</strong> بالكامل.</p>
        <h3 className="text-xl font-bold text-slate-900">تحصيل الديون القانونية باحترافية</h3>
        <p>يضم فريقنا مستشارين قانونيين وماليين متخصصين في قانون التجارة السعودي لضمان <strong>تحصيل مستحقات الرياض</strong> بأعلى كفاءة. نوفر خدمة <strong>تحصيل ديون للشركات</strong> مما يتيح لنا اتخاذ الإجراءات القانونية اللازمة عند الضرورة مع الحرص دائماً على التسوية الودية لنجاح <strong>تحصيل ديون تجارية</strong> مع الحفاظ على علاقاتك المهنية.</p>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-right">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">أسئلة شائعة عن تحصيل الديون بالرياض</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm group">
                <summary className="font-bold text-slate-900 cursor-pointer flex justify-between items-center gap-4 list-none">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="text-saddad-gold shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-slate-500 font-light text-sm mt-4 leading-loose">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">لا تدع أموالك تضيع — استردّها الآن</h2>
          <p className="text-slate-300 font-light mb-8">تواصل مع خبراء تحصيل الديون في نجد السداد وابدأ مسيرة استرداد مستحقاتك التجارية بالرياض اليوم.</p>
          <a href="https://wa.me/00966570856657" className="bg-saddad-gold text-slate-950 px-10 py-4 rounded-xl font-bold hover:bg-saddad-gold-light transition-all inline-flex items-center gap-2">
            <PhoneCall size={20} /> ابدأ التحصيل الآن
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "تحصيل ديون الشركات الرياض",
        "serviceType": "Debt Collection",
        "provider": {
          "@type": "FinancialService",
          "name": "نجد السداد للحلول المالية والتطوير العقاري",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "الرياض",
            "addressRegion": "الرياض",
            "addressCountry": "SA"
          }
        },
        "areaServed": {
          "@type": "City",
          "name": "الرياض"
        },
        "description": "خدمات تحصيل ديون الشركات والمؤسسات واسترداد المستحقات المالية والتجارية باحترافية في الرياض.",
        "offers": {
          "@type": "Offer",
          "url": "https://brand1me.com/tahseel-doyoon",
          "priceCurrency": "SAR",
          "price": "0",
          "eligibleRegion": {
            "@type": "Country",
            "name": "SA"
          }
        }
      })}} />
    </div>
  );
}
