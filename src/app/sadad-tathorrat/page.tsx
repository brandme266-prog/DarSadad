import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, PhoneCall, ArrowLeft, ChevronDown, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "سداد تعثرات الرياض | تسوية ديون بنكية وتحسين سمة | نجد السداد",
  description: "خدمات سداد تعثرات بنكية بخطط ميسرة بالرياض. تسوية ديون، إعادة جدولة قروض، تحسين سجل سمة الائتماني. فريق متخصص يضمن حل تعثراتك المالية بسرعة واحترافية.",
  keywords: ["سداد تعثرات الرياض", "سداد تعثرات بنكية", "تسوية ديون الرياض", "تسوية سمة الرياض", "إعادة جدولة قروض الرياض", "حل تعثرات مالية الرياض", "سداد تعثرات بخطط ميسرة"],
};

const faqs = [
  { q: "كيف يمكنني سداد تعثراتي البنكية بخطط ميسرة في الرياض؟", a: "تتولى نجد السداد التفاوض مع البنوك والجهات الدائنة نيابةً عنك لإعادة جدولة ديونك البنكية وتمديد فترة السداد بأقساط شهرية تتوافق مع دخلك الحالي." },
  { q: "ما الوقت المستغرق لتسوية التعثرات البنكية بالرياض؟", a: "يختلف الوقت تبعاً لحجم الديون وعدد الجهات الدائنة، ولكن في الغالب تستغرق العملية من أسبوعين حتى 3 أشهر للوصول إلى اتفاقية تسوية كاملة." },
  { q: "هل يمكن تحسين سجل سمة بعد التعثر في الرياض؟", a: "نعم، بعد إتمام سداد التعثرات والحصول على إخلاء طرف رسمي من الجهة الدائنة يقوم فريقنا بمتابعة تحديث بيانات سمة وإزالة التعثر من سجلك الائتماني خلال 30-60 يوماً." },
  { q: "هل خدمة سداد التعثرات متاحة للشركات في الرياض؟", a: "نعم، نقدم خدمات تسوية الديون لكلٍّ من الأفراد والشركات والمؤسسات التجارية بالرياض عبر فريق متخصص من المستشارين الماليين والقانونيين." },
];

export default function SadadTathorratPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-32 pb-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-saddad-gold/5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saddad-gold/10 border border-saddad-gold/20 mb-5">
            <ShieldCheck size={14} className="text-saddad-gold" />
            <span className="text-xs font-bold text-saddad-gold">حلول مضمونة لتسوية الديون بالرياض</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-5">
            سداد تعثرات الرياض<br/>
            <span className="text-saddad-gold">وتسوية ديون بخطط ميسرة</span>
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-3xl mb-10 leading-relaxed">
            تعاني من تعثرات بنكية أو قروض متأخرة؟ فريق نجد السداد يتولى التفاوض مع البنوك والجهات الدائنة لإعادة جدولة ديونك وتسوية تعثراتك بخطط سداد ميسرة وتحسين سجلك في سمة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/966570856657" className="bg-saddad-gold text-slate-950 text-center px-8 py-4 rounded-xl font-bold hover:bg-saddad-gold-light transition-all flex items-center justify-center gap-2 shadow-lg">
              <PhoneCall size={20} /> تواصل مع خبير التعثرات
            </a>
            <Link href="/contact" className="bg-white text-slate-800 border-2 border-slate-200 text-center px-8 py-4 rounded-xl font-bold hover:border-saddad-gold transition-all flex items-center justify-center gap-2">
              <ArrowLeft size={18} /> دراسة حالتك مجاناً
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-10 text-right">خدماتنا في سداد التعثرات وتسوية الديون بالرياض</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "إعادة جدولة القروض البنكية", d: "نتفاوض مع البنوك لتمديد فترة السداد وتخفيض الأقساط الشهرية إلى مستوى يتوافق مع دخلك الحالي." },
            { t: "تسوية الديون المتعثرة", d: "نعمل على إبرام اتفاقيات تسوية رسمية تضمن إخلاء طرفك من الديون المتعثرة بأفضل الشروط الممكنة." },
            { t: "تحسين السجل في سمة", d: "بعد إتمام التسوية نتابع تحديث بياناتك في سمة وإزالة التعثر من سجلك الائتماني لاستعادة أهليتك." },
            { t: "الدفاع عنك أمام الجهات الدائنة", d: "يمثلك فريقنا القانوني والمالي في جميع المراسلات والمفاوضات مع البنوك والشركات التمويلية." },
            { t: "خطط سداد مخصصة", d: "نصمم لك خطة سداد واقعية تتناسب مع وضعك المالي الحالي وتضمن عدم الوقوع في تعثرات مستقبلية." },
            { t: "سداد تعثرات الشركات", d: "نقدم خدمات متخصصة لتسوية ديون الشركات والمؤسسات التجارية وحماية أصولها من الحجز." },
          ].map((s, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-right">
              <CheckCircle2 size={20} className="text-saddad-gold mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">{s.t}</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 text-right space-y-8 text-slate-700 font-light leading-loose">
        <h2 className="text-2xl font-bold text-slate-900">سداد التعثرات البنكية في الرياض: كل ما تحتاج معرفته</h2>
        <p>التعثر المالي حالة يمكن الخروج منها بالتخطيط السليم والمساعدة المتخصصة. في نجد السداد بالرياض، نؤمن بأن لكل أزمة مالية حلاً، وقد ساعدنا آلاف العملاء في مسار <strong>حل تعثرات مالية الرياض</strong> على تجاوز الأزمات واستعادة مسيرتهم المالية بفضل أفضل الحلول في <strong>تسوية ديون الرياض</strong> وتخليصهم من عبء القروض المتراكمة.</p>
        <h3 className="text-xl font-bold text-slate-900">كيف نعالج تعثراتك البنكية في الرياض خطوة بخطوة</h3>
        <p>تبدأ عملية <strong>سداد تعثرات الرياض</strong> في نجد السداد بدراسة شاملة لوضعك المالي وتحديد جميع الالتزامات المتعثرة، ثم نضع خطة تفاوضية مع الجهات الدائنة بهدف <strong>إعادة جدولة قروض الرياض</strong> وفق استطاعتك المادية، ونتابع تنفيذ الخطة حتى الحصول على إخلاء الطرف الرسمي واستكمال إجراءات <strong>تسوية سمة الرياض</strong> لتنظيف سجلك الائتماني بشكل كامل.</p>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-right">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">أسئلة شائعة حول سداد التعثرات بالرياض</h2>
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
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-saddad-gold/15 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">تعثرت مالياً؟ نحن هنا لمساعدتك</h2>
          <p className="text-slate-300 font-light mb-8">لا تتركها تتراكم. تواصل مع فريق نجد السداد الآن لدراسة حالتك مجاناً وإيجاد أفضل حل لتعثراتك البنكية في الرياض.</p>
          <a href="https://wa.me/966570856657" className="bg-saddad-gold text-slate-950 px-10 py-4 rounded-xl font-bold hover:bg-saddad-gold-light transition-all inline-flex items-center gap-2">
            <PhoneCall size={20} /> ابدأ حل تعثراتك الآن
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
        "name": "سداد تعثرات الرياض",
        "serviceType": "Debt Settlement",
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
        "description": "حلول مضمونة لسداد التعثرات البنكية، وتسوية الديون المتأخرة وإعادة جدولة القروض بالرياض وتحسين سجل سمة.",
        "offers": {
          "@type": "Offer",
          "url": "https://brand1me.com/sadad-tathorrat",
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
