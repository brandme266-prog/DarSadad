import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, PhoneCall, ArrowLeft, ChevronDown, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "تحسين سمة الرياض | تصحيح السجل الائتماني وتسوية سمة | نجد السداد",
  description: "خدمات تحسين سجل سمة الائتماني ورفع التقييم وتصحيح البيانات في الرياض. سداد سمة، تسوية سمة، استعلام سمة. فريق متخصص يضمن تحسين وضعك الائتماني بأسرع وقت.",
  keywords: ["تحسين سمة الرياض", "تصحيح سجل ائتماني الرياض", "تسوية سمة الرياض", "سداد سمة الرياض", "رفع تقييم سمة", "خدمات سمة الرياض", "استعلام سمة الرياض"],
};

const faqs = [
  { q: "كم يستغرق تحسين السجل الائتماني في سمة بالرياض؟", a: "بعد سداد التعثرات والحصول على إخلاء الطرف الرسمي، يستغرق تحديث البيانات في سمة وتحسين التقييم من 30 إلى 60 يوم عمل." },
  { q: "هل يمكن تصحيح بيانات خاطئة في سمة بالرياض؟", a: "نعم، يحق لك طلب تصحيح البيانات الخاطئة في سمة، ويقوم فريقنا بمراجعة سجلك الائتماني وتحديد الأخطاء وتقديم طلبات التصحيح الرسمية للجهات المختصة." },
  { q: "ما أثر التعثرات على تقييمي في سمة؟", a: "التعثرات البنكية تخفض تقييمك الائتماني في سمة مما يؤثر على قدرتك في الحصول على تمويل مستقبلي. إزالة التعثرات وسداد الديون يرفع التقييم تدريجياً." },
  { q: "ما هي خدمات سمة التي تقدمها نجد السداد بالرياض؟", a: "نقدم: الاستعلام عن تقرير سمة، تحليل السجل الائتماني، سداد التعثرات، تصحيح البيانات الخاطئة، متابعة رفع التقييم، ومساعدتك في استعادة أهليتك التمويلية." },
];

export default function KhadamatSimahPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-32 pb-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-saddad-gold/5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saddad-gold/10 border border-saddad-gold/20 mb-5">
            <Star size={14} className="text-saddad-gold" />
            <span className="text-xs font-bold text-saddad-gold">متخصصون في تحسين السجل الائتماني بالرياض</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-5">
            تحسين سمة الرياض<br/>
            <span className="text-saddad-gold">واستعادة أهليتك الائتمانية</span>
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-3xl mb-10 leading-relaxed">
            سجلك الائتماني في سمة هو مفتاحك للتمويل المستقبلي. نجد السداد تقدم خدمات متكاملة لتحسين تقييمك في سمة وتصحيح البيانات وسداد التعثرات وإزالتها من سجلك لتعود مؤهلاً للحصول على التمويل الذي تحتاجه.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/966570856657" className="bg-saddad-gold text-slate-950 text-center px-8 py-4 rounded-xl font-bold hover:bg-saddad-gold-light transition-all flex items-center justify-center gap-2 shadow-lg">
              <PhoneCall size={20} /> حسّن سمتك الآن
            </a>
            <Link href="/contact" className="bg-white text-slate-800 border-2 border-slate-200 text-center px-8 py-4 rounded-xl font-bold hover:border-saddad-gold transition-all flex items-center justify-center gap-2">
              <ArrowLeft size={18} /> استعلام مجاني عن سمتك
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-10 text-right">خدمات سمة الائتمانية التي نقدمها بالرياض</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "الاستعلام عن تقرير سمة", d: "نستخرج تقريرك الائتماني الكامل من سمة ونحلله لتحديد نقاط القوة والضعف في سجلك." },
            { t: "تصحيح البيانات الخاطئة", d: "نتابع مع سمة والجهات الدائنة تصحيح أي بيانات مغلوطة تؤثر سلباً على تقييمك الائتماني." },
            { t: "سداد التعثرات وإزالتها", d: "نتولى إجراءات سداد التعثرات وإخلاء الطرف ومتابعة إزالتها من سجلك في سمة." },
            { t: "رفع التقييم الائتماني", d: "نضع لك خطة مدروسة لرفع تقييمك الائتماني في سمة تدريجياً لضمان حصولك على التمويل المناسب." },
            { t: "تسوية سمة للشركات", d: "خدمات متخصصة لتحسين السجل الائتماني للشركات والمؤسسات التجارية وإزالة التعثرات التجارية." },
            { t: "متابعة مستمرة للسجل", d: "نتابع سجلك الائتماني بصفة دورية ونُبلغك بأي تغييرات أو مستجدات تطرأ عليه في سمة." },
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
        <h2 className="text-2xl font-bold text-slate-900">دليل تحسين السجل الائتماني في سمة بالرياض</h2>
        <p>منصة سمة (شركة المعلومات الائتمانية) هي المرجع الأساسي الذي تعتمد عليه البنوك وجميع جهات التمويل في المملكة العربية السعودية لتقييم الجدارة الائتمانية لكل فرد أو شركة. في نجد السداد، نقدم أفضل <strong>خدمات سمة الرياض</strong> حيث يساعدك تقييمك العالي في الحصول على القروض بسهولة. إذا كان تقييمك منخفضاً، فإننا نقدم حلول <strong>تحسين سمة الرياض</strong> المتكاملة لإنقاذ موقفك المالي.</p>
        <h3 className="text-xl font-bold text-slate-900">لماذا تنخفض تقييمات سمة وكيف نرفعها؟</h3>
        <p>تنخفض درجات التقييم الائتماني نتيجة تأخر الأقساط أو التعثر. يعمل فريقنا على <strong>تسوية سمة الرياض</strong> عبر التفاوض مع البنوك، ونقوم بـ <strong>سداد سمة الرياض</strong> لإغلاق المديونيات. بعد ذلك، نبدأ فوراً في <strong>تصحيح سجل ائتماني الرياض</strong> من أي أخطاء ونجري <strong>استعلام سمة الرياض</strong> دورياً لمراقبة <strong>رفع تقييم سمة</strong> تدريجياً لتعود مؤهلاً للتمويل.</p>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-right">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">أسئلة شائعة عن خدمات سمة بالرياض</h2>
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
          <h2 className="text-3xl font-bold mb-4">اعرف وضعك في سمة وحسّنه اليوم</h2>
          <p className="text-slate-300 font-light mb-8">تواصل مع نجد السداد للحصول على تقرير سمة وتحليله وخطة لتحسين تقييمك الائتماني بالرياض.</p>
          <a href="https://wa.me/966570856657" className="bg-saddad-gold text-slate-950 px-10 py-4 rounded-xl font-bold hover:bg-saddad-gold-light transition-all inline-flex items-center gap-2">
            <PhoneCall size={20} /> استعلم عن سمتك الآن
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
        "name": "خدمات تحسين سمة الرياض",
        "serviceType": "Credit Repair",
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
        "description": "خدمات متكاملة لتحسين السجل الائتماني، رفع تقييم سمة، الاستعلام عن سمة، ותصحيح البيانات الخاطئة في الرياض.",
        "offers": {
          "@type": "Offer",
          "url": "https://brand1me.com/khadamat-simah",
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
