import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, PhoneCall, Building2, ArrowLeft, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "تمويل عقاري الرياض 2026 | قرض عقاري بدون دفعة أولى للأفراد | نجد السداد",
  description: "احصل على أفضل تمويل عقاري الرياض بدون دفعة أولى للأفراد والموظفين. تمويل فلل وشقق وأراضي بشروط ميسرة وهامش ربح منافس. موافقة سريعة من نجد السداد. تواصل الآن.",
  keywords: ["تمويل عقاري الرياض", "قرض عقاري بدون دفعة أولى", "تمويل عقاري للأفراد", "تمويل عقاري للفلل الرياض", "تمويل عقاري للشقق الرياض", "تمويل شراء منزل الرياض", "تمويل إسكاني الرياض"],
};

const faqs = [
  { q: "ما شروط التمويل العقاري بدون دفعة أولى في الرياض؟", a: "يشترط الحصول على تمويل عقاري بدون دفعة أولى بالرياض أن يكون المتقدم سعودي الجنسية أو مقيماً بإقامة نظامية، وأن يكون دخله كافياً لتغطية الأقساط الشهرية بحيث لا تتجاوز نسبة الاستقطاع 33-45% من الراتب الشهري، مع سجل ائتماني نظيف في سمة." },
  { q: "ما الفرق بين التمويل العقاري المدعوم وغير المدعوم بالرياض؟", a: "التمويل العقاري المدعوم هو الذي تقدمه صندوق التنمية العقارية بدعم حكومي بهامش ربح صفر أو منخفض جداً، أما التمويل غير المدعوم فيقدمه البنوك والجهات التمويلية بهامش ربح تنافسي، ونجد السداد يساعدك في الحصول على كلا النوعين." },
  { q: "هل يمكن تمويل فلل وشقق في جميع أحياء الرياض؟", a: "نعم، يغطي التمويل العقاري لنجد السداد جميع أحياء الرياض بما فيها النرجس، الياسمين، الملقا، العقيق، الصحافة، النخيل، المروج، قرطبة، وغيرها." },
  { q: "ما الحد الأقصى لمبلغ التمويل العقاري في الرياض؟", a: "يمكن الحصول على تمويل عقاري يبدأ من 100 ألف ريال وقد يصل إلى عشرات الملايين حسب قيمة العقار والملاءة المالية للعميل وضوابط البنك المركزي السعودي." },
  { q: "هل التمويل العقاري الإسلامي متاح في الرياض؟", a: "نعم، جميع برامجنا للتمويل العقاري في الرياض متوافقة مع أحكام الشريعة الإسلامية وتعتمد نظام المرابحة الإسلامية وبعقود مصادق عليها من هيئة الشريعة المعتمدة." },
];

const propertyTypes = ["فلل سكنية", "شقق للتمليك", "أراضي سكنية", "عمائر سكنية", "مجمعات سكنية", "مكاتب تجارية", "محلات تجارية", "مستودعات ومخازن"];

export default function TamweelAqariPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-saddad-gold/5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saddad-gold/10 border border-saddad-gold/20 mb-5">
            <Building2 size={14} className="text-saddad-gold" />
            <span className="text-xs font-bold text-saddad-gold">تمويل عقاري للأفراد والمؤسسات بالرياض</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-5">
            تمويل عقاري الرياض<br/>
            <span className="text-saddad-gold">بدون دفعة أولى بشروط ميسرة</span>
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-3xl mb-10 leading-relaxed">
            امتلك عقارك في الرياض الآن مع نجد السداد. نقدم أفضل برامج التمويل العقاري والقرض العقاري للأفراد بدون دفعة أولى، بأقساط شهرية ميسرة وفترات سداد تمتد حتى 25 سنة، متوافق مع أحكام الشريعة الإسلامية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/00966570856657" className="bg-saddad-gold text-slate-950 text-center px-8 py-4 rounded-xl font-bold hover:bg-saddad-gold-light transition-all flex items-center justify-center gap-2 shadow-lg">
              <PhoneCall size={20} /> ابدأ رحلة تملكك الآن
            </a>
            <Link href="/contact" className="bg-white text-slate-800 border-2 border-slate-200 text-center px-8 py-4 rounded-xl font-bold hover:border-saddad-gold transition-all flex items-center justify-center gap-2">
              <ArrowLeft size={18} /> استشارة عقارية مجانية
            </Link>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-3 text-right">أنواع العقارات التي نموّلها في الرياض</h2>
        <p className="text-slate-500 font-light text-right mb-8">يغطي تمويلنا العقاري بالرياض جميع أنواع العقارات السكنية والتجارية:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {propertyTypes.map((type, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-center gap-2 text-right">
              <CheckCircle2 size={16} className="text-saddad-gold shrink-0" />
              <span className="text-sm font-medium text-slate-800">{type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-right">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">لماذا تختار نجد السداد للحلول المالية العقاري في الرياض؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: "خبرة طويلة في السوق العقاري الرياضي", d: "فريقنا يمتلك خبرة عميقة في سوق العقارات بالرياض وعلاقات قوية مع البنوك لضمان أفضل شروط التمويل." },
              { t: "تمويل بدون دفعة أولى للمؤهلين", d: "برامج مخصصة للمؤهلين من الموظفين الحكوميين والخاص للحصول على تمويل عقاري بدون اشتراط دفعة أولى." },
              { t: "أقساط ميسرة تمتد لـ 25 سنة", d: "فترات سداد طويلة تضمن أقساطاً شهرية صغيرة تناسب جميع مستويات الدخل في الرياض." },
              { t: "دعم كامل طوال رحلة التمويل", d: "نتابع ملفك من لحظة التقديم حتى صرف التمويل وتوثيق العقد مرورًا بجميع المراحل الإجرائية." },
            ].map((a, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2 text-base">{a.t}</h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-right space-y-8 text-slate-700 font-light leading-loose">
        <h2 className="text-2xl font-bold text-slate-900">دليلك الشامل للحصول على تمويل عقاري الرياض 2026</h2>
        <p>يُعدّ الحصول على <strong>تمويل شراء منزل الرياض</strong> من أكثر القرارات المالية أهمية في حياة أي فرد، لذا تحرص شركة نجد السداد على تقديم استشارات عقارية متخصصة تساعدك في اتخاذ القرار المناسب وانتقاء برنامج <strong>تمويل إسكاني الرياض</strong> الأمثل سواء كنت تبحث عن تمويل <strong>فلل سكنية</strong> أو <strong>شقق</strong> أو أراضٍ سكنية في أحياء الرياض المختلفة.</p>
        
        <h3 className="text-xl font-bold text-slate-900">مميزات التمويل العقاري للأفراد بالرياض</h3>
        <p>يتمتع المواطنون السعوديون بالرياض بمزايا عديدة في الحصول على <strong>تمويل عقاري للأفراد</strong>، في مقدمتها الدعم الحكومي من خلال صندوق التنمية العقارية، والذي يُتيح تمويل السكن بهامش ربح صفر أو مخفّض جداً لمستحقيه. نسهل لك الحصول على <strong>قرض عقاري بدون دفعة أولى</strong> عبر إنهاء كافة المتطلبات البنكية بوقت قياسي.</p>
        
        <h3 className="text-xl font-bold text-slate-900">تمويل عقاري للفلل والشقق بالرياض</h3>
        <p>إذا كنت ترغب في <strong>تمويل عقاري للفلل الرياض</strong> أو <strong>تمويل عقاري للشقق الرياض</strong>، يمكن للمقيمين والمواطنين الحصول على التمويل بشروط ميسرة عبر البنوك المرخصة التي نتعامل معها، ويقوم فريقنا بمرافقتهم في هذه الإجراءات لضمان حصولهم على أفضل العروض المتاحة بالسوق العقاري.</p>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-right">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">أسئلة شائعة عن التمويل العقاري بالرياض</h2>
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

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-saddad-gold/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">ابدأ رحلة تملّك عقارك بالرياض اليوم</h2>
          <p className="text-slate-300 font-light mb-8">تواصل مع خبراء التمويل العقاري في نجد السداد للحصول على استشارة مجانية وأفضل عرض تمويل يناسب احتياجاتك.</p>
          <a href="https://wa.me/00966570856657" className="bg-saddad-gold text-slate-950 px-10 py-4 rounded-xl font-bold text-base hover:bg-saddad-gold-light transition-all inline-flex items-center gap-2">
            <PhoneCall size={20} /> احجز استشارتك المجانية
          </a>
        </div>
      </section>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "تمويل عقاري الرياض",
        "serviceType": "Mortgage Loan",
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
        "description": "تمويل عقاري بدون دفعة أولى للفلل والشقق والأراضي في الرياض.",
        "offers": {
          "@type": "Offer",
          "url": "https://brand1me.com/tamweel-aqari",
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
