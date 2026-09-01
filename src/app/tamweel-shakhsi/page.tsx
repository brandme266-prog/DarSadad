import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, PhoneCall, ArrowLeft, Users, Clock, Shield, TrendingUp, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "تمويل شخصي الرياض | قرض شخصي سريع حتى مليون ريال بدون كفيل | نجد السداد",
  description: "احصل على تمويل شخصي الرياض بدون كفيل حتى مليون ريال للموظفين الحكوميين والقطاع الخاص. موافقة سريعة خلال 24 ساعة، أقساط ميسرة، هامش ربح منافس. تواصل مع نجد السداد الآن.",
  keywords: ["تمويل شخصي الرياض", "قرض شخصي الرياض", "تمويل شخصي بدون كفيل الرياض", "تمويل شخصي للموظفين الرياض", "قرض شخصي سريع الرياض", "تمويل شخصي مليون ريال", "تسهيلات شخصية الرياض", "سلف شخصية الرياض"],
  openGraph: {
    title: "تمويل شخصي الرياض | نجد السداد",
    description: "تمويل شخصي سريع حتى مليون ريال بدون كفيل للموظفين الحكوميين والخاص بالرياض.",
  }
};

const faqs = [
  {
    q: "ما هو الحد الأقصى لمبلغ التمويل الشخصي في الرياض؟",
    a: "يصل التمويل الشخصي الذي تتيحه نجد السداد بالرياض حتى مليون ريال سعودي، وذلك وفقاً لدخل العميل ومدى ملاءته المالية."
  },
  {
    q: "هل يمكن الحصول على تمويل شخصي بدون كفيل بالرياض؟",
    a: "نعم، تتوفر برامج تمويل شخصي بدون كفيل للموظفين في الجهات الحكومية والشركات الكبرى بالرياض، ويشترط تحويل الراتب فقط."
  },
  {
    q: "ما شروط الحصول على قرض شخصي للموظفين بالرياض؟",
    a: "يشترط أن يكون المتقدم موظفاً في جهة حكومية أو خاصة معتمدة، وألا تتجاوز نسبة الاستقطاع 33% من الراتب، مع توفر سجل ائتماني جيد في سمة."
  },
  {
    q: "كم تستغرق الموافقة على التمويل الشخصي السريع بالرياض؟",
    a: "تتم الموافقة المبدئية على التمويل الشخصي السريع خلال 24-48 ساعة فقط من تقديم المستندات الكاملة."
  },
  {
    q: "هل التمويل الشخصي متاح للقطاع الخاص بالرياض؟",
    a: "نعم، يتوفر تمويل شخصي للقطاع الخاص بالرياض شريطة أن تكون الشركة مسجلة في وزارة الموارد البشرية وراتب العميل لا يقل عن 4,000 ريال."
  }
];

export default function TamweelShakhsiPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-saddad-gold/5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saddad-gold/10 border border-saddad-gold/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-saddad-gold animate-pulse"></span>
            <span className="text-xs font-bold text-saddad-gold">خدمة متاحة في جميع أحياء الرياض</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-5">
            تمويل شخصي الرياض<br/>
            <span className="text-saddad-gold">بدون كفيل حتى مليون ريال</span>
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-3xl mb-10 leading-relaxed">
            نوفر لك في <strong className="font-bold text-slate-800">نجد السداد</strong> أفضل برامج التمويل الشخصي والقرض الشخصي بالرياض للموظفين الحكوميين وموظفي القطاع الخاص والعسكريين والمتقاعدين، بهامش ربح تنافسي وأقساط ميسرة وموافقة سريعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/00966570856657" className="bg-saddad-gold text-slate-950 text-center px-8 py-4 rounded-xl font-bold text-base hover:bg-saddad-gold-light transition-all flex items-center justify-center gap-2 shadow-lg">
              <PhoneCall size={20} /> اطلب تمويلك الآن عبر واتساب
            </a>
            <Link href="/contact" className="bg-white text-slate-800 border-2 border-slate-200 text-center px-8 py-4 rounded-xl font-bold hover:border-saddad-gold transition-all flex items-center justify-center gap-2">
              <ArrowLeft size={18} /> احجز استشارة مجانية
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "+5,000", label: "عميل تم خدمتهم" },
            { value: "24 ساعة", label: "متوسط وقت الموافقة" },
            { value: "مليون ريال", label: "الحد الأقصى للتمويل" },
            { value: "99.8%", label: "نسبة إنجاز الطلبات" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <p className="text-2xl md:text-3xl font-bold text-saddad-blue">{s.value}</p>
              <p className="text-xs text-slate-500 font-light">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-3 text-right">مميزات تمويلنا الشخصي بالرياض</h2>
        <p className="text-slate-500 font-light text-right mb-12">نقدم أفضل شروط التمويل الشخصي في الرياض مقارنةً بالبنوك التقليدية:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <TrendingUp size={24}/>, title: "تمويل حتى مليون ريال", desc: "سيولة نقدية فورية تصل حتى مليون ريال للموظفين المؤهلين بالرياض." },
            { icon: <Clock size={24}/>, title: "موافقة خلال 24 ساعة", desc: "نُسرّع إجراءات الموافقة على قرضك الشخصي لتحصل على السيولة في أقصر وقت ممكن." },
            { icon: <Shield size={24}/>, title: "بدون كفيل أو ضامن", desc: "برامج تمويل شخصي بدون كفيل للموظفين في الجهات الحكومية والشركات الكبرى بالرياض." },
            { icon: <Users size={24}/>, title: "لجميع فئات الموظفين", desc: "تمويل للموظفين الحكوميين والخاص والعسكريين والمتقاعدين والأطباء والمهندسين." },
            { icon: <CheckCircle2 size={24}/>, title: "أقساط ميسرة ومرنة", desc: "فترات سداد تمتد حتى 5 سنوات بأقساط شهرية مريحة تتناسب مع دخلك." },
            { icon: <TrendingUp size={24}/>, title: "هامش ربح تنافسي", desc: "أقل هامش ربح في تمويل شخصي الرياض متوافق مع أحكام الشريعة الإسلامية." },
          ].map((f, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-right">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-saddad-gold mb-4 shadow-sm">
                {f.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-base">{f.title}</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-right">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">من يستفيد من تمويلنا الشخصي بالرياض؟</h2>
          <p className="text-slate-500 font-light mb-10">برامج متنوعة تغطي جميع شرائح المجتمع في مدينة الرياض:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["الموظفون الحكوميون", "موظفو القطاع الخاص", "العسكريون والضباط", "المتقاعدون المدنيون", "المتقاعدون العسكريون", "الأطباء والمهندسون", "المعلمون والمعلمات", "أصحاب المهن الحرة"].map((seg, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-slate-100 flex items-center gap-2 shadow-sm">
                <CheckCircle2 size={16} className="text-saddad-gold shrink-0" />
                <span className="text-sm font-medium text-slate-800">{seg}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form SEO Content */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-right space-y-8 text-slate-700 font-light leading-loose">
        <h2 className="text-2xl font-bold text-slate-900">دليل شامل: التمويل الشخصي والقرض الشخصي في الرياض 2026</h2>
        <p>يُعدّ الحصول على <strong>تمويل شخصي الرياض</strong> من أكثر الخدمات المالية طلباً في المملكة العربية السعودية، إذ يلجأ إليه الموظفون وأصحاب الأعمال لتغطية احتياجاتهم المتنوعة، سواءً لشراء سيارة أو تجديد المنزل أو إقامة حفلات الأفراح أو سداد الالتزامات. في <strong className="font-bold text-slate-900">شركة نجد السداد للحلول المالية بالرياض</strong>، نعمل على تبسيط هذه العملية وتقليص وقت الإجراءات لمنحك <strong>قرض شخصي سريع الرياض</strong> والحرية المالية التي تستحقها.</p>

        <h3 className="text-xl font-bold text-slate-900">تمويل شخصي للموظفين الحكوميين بالرياض</h3>
        <p>يُعتبر موظفو الجهات الحكومية من أكثر الفئات استحقاقاً للتمويل، حيث نوفر <strong>تمويل شخصي للموظفين الرياض</strong> يصل حتى <strong>مليون ريال</strong> بأقساط شهرية تُحسم آلياً وبشروط ميسرة. نُقدم حلول <strong>تمويل شخصي بدون كفيل الرياض</strong> لتسهيل الإجراءات قدر الإمكان.</p>

        <h3 className="text-xl font-bold text-slate-900">تمويل شخصي للقطاع الخاص بالرياض بدون كفيل</h3>
        <p>إدراكاً منا للتحديات التي يواجهها موظفو القطاع الخاص، وفّرنا برامج <strong>تمويل شخصي</strong> خاصة بهم في الرياض بشروط مرنة، يشترط فيها فقط أن تكون الشركة مسجلة في وزارة الموارد البشرية وأن لا يقل الراتب الشهري عن 4,000 ريال، للحصول على <strong>تسهيلات شخصية الرياض</strong> ممتازة.</p>

        <h3 className="text-xl font-bold text-slate-900">قرض شخصي إسلامي وشرعي بالرياض</h3>
        <p>جميع برامجنا للحصول على <strong>سلف شخصية الرياض</strong> متوافقة تماماً مع أحكام الشريعة الإسلامية ومرخّصة من الهيئات الرقابية المختصة، وتعتمد على نظام المرابحة الإسلامية مما يجعلها خالية من الفوائد الربوية.</p>
      </section>

      {/* FAQ Schema */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-right">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">الأسئلة الشائعة حول التمويل الشخصي بالرياض</h2>
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
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-saddad-gold/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">هل تحتاج تمويلاً شخصياً عاجلاً في الرياض؟</h2>
          <p className="text-slate-300 font-light mb-8">تواصل معنا الآن في نجد السداد وسيقدم لك فريقنا المتخصص أفضل عرض تمويل شخصي يناسب دخلك واحتياجاتك.</p>
          <a href="https://wa.me/00966570856657" className="bg-saddad-gold text-slate-950 px-10 py-4 rounded-xl font-bold text-base hover:bg-saddad-gold-light transition-all inline-flex items-center gap-2 shadow-lg">
            <PhoneCall size={20} /> احصل على عرض تمويل الآن
          </a>
        </div>
      </section>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "تمويل شخصي الرياض",
        "serviceType": "Personal Loan",
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
        "description": "تمويل شخصي سريع حتى مليون ريال بدون كفيل للموظفين في الجهات الحكومية والقطاع الخاص في الرياض.",
        "offers": {
          "@type": "Offer",
          "url": "https://brand1me.com/tamweel-shakhsi",
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
