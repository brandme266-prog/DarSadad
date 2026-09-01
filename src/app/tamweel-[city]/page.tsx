import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, PhoneCall, ArrowLeft, MapPin, ChevronDown } from "lucide-react";

const cities: Record<string, { name: string; services: string[]; desc: string }> = {
  jeddah: {
    name: "جدة",
    services: ["تمويل شخصي جدة", "تمويل عقاري جدة", "سداد تعثرات جدة", "تحصيل ديون جدة", "خدمات سمة جدة"],
    desc: "المركز التجاري الأول في المملكة ثاني أكبر مدينة"
  },
  makkah: {
    name: "مكة المكرمة",
    services: ["تمويل شخصي مكة", "تمويل عقاري مكة", "سداد تعثرات مكة", "تحصيل ديون مكة", "خدمات سمة مكة"],
    desc: "أقدس البقاع وعاصمة منطقة مكة المكرمة"
  },
  dammam: {
    name: "الدمام",
    services: ["تمويل شخصي الدمام", "تمويل عقاري الدمام", "سداد تعثرات الدمام", "تحصيل ديون الدمام", "خدمات سمة الدمام"],
    desc: "عاصمة المنطقة الشرقية وبوابة الخليج"
  },
  khobar: {
    name: "الخبر",
    services: ["تمويل شخصي الخبر", "تمويل عقاري الخبر", "سداد تعثرات الخبر", "تحصيل ديون الخبر", "خدمات سمة الخبر"],
    desc: "المدينة الاقتصادية في المنطقة الشرقية"
  },
  taif: {
    name: "الطائف",
    services: ["تمويل شخصي الطائف", "تمويل عقاري الطائف", "سداد تعثرات الطائف", "تحصيل ديون الطائف", "خدمات سمة الطائف"],
    desc: "عاصمة منطقة مكة الصيفية والمدينة الجبلية الجميلة"
  },
  medina: {
    name: "المدينة المنورة",
    services: ["تمويل شخصي المدينة المنورة", "تمويل عقاري المدينة المنورة", "سداد تعثرات المدينة المنورة", "تحصيل ديون المدينة المنورة", "خدمات سمة المدينة المنورة"],
    desc: "ثاني أقدس البقاع في الإسلام"
  },
};

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityData = cities[city];
  if (!cityData) return { title: "المدينة غير موجودة" };
  
  return {
    title: `تمويل شخصي وعقاري ${cityData.name} | سداد تعثرات وتحصيل ديون | نجد السداد`,
    description: `أفضل خدمات التمويل الشخصي والعقاري وسداد التعثرات وتحصيل الديون وخدمات سمة في ${cityData.name}. نجد السداد: خبرة عالية وحلول مالية متكاملة. تواصل الآن.`,
    keywords: cityData.services,
  };
}

export function generateStaticParams() {
  return Object.keys(cities).map(city => ({ city }));
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const cityData = cities[city];
  if (!cityData) notFound();

  const faqs = [
    { q: `هل تقدم نجد السداد خدمات التمويل الشخصي في ${cityData.name}؟`, a: `نعم، تقدم نجد السداد جميع خدماتها المالية بما فيها التمويل الشخصي والعقاري وسداد التعثرات وتحصيل الديون وخدمات سمة لعملاء ${cityData.name} وضواحيها.` },
    { q: `ما هو الحد الأقصى للتمويل الشخصي في ${cityData.name}؟`, a: `يتوفر تمويل شخصي يصل حتى مليون ريال في ${cityData.name} للموظفين المؤهلين في القطاعين الحكومي والخاص بأقساط ميسرة وهامش ربح تنافسي.` },
    { q: `كيف يمكنني التواصل مع نجد السداد من ${cityData.name}؟`, a: `يمكنك التواصل معنا عبر واتساب على الرقم 966570856657+ أو عبر البريد الإلكتروني info@najdsadad.com ونحن نخدم عملاء ${cityData.name} عن بُعد وبالحضور الشخصي.` },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-32 pb-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-saddad-gold/5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saddad-gold/10 border border-saddad-gold/20 mb-5">
            <MapPin size={14} className="text-saddad-gold" />
            <span className="text-xs font-bold text-saddad-gold">خدماتنا متاحة في {cityData.name} وضواحيها</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            خدمات نجد السداد المالية<br/>
            <span className="text-saddad-gold">في {cityData.name}</span>
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-3xl mb-10 leading-relaxed">
            تقدم نجد السداد خدمات التمويل الشخصي والعقاري وسداد التعثرات وتحصيل الديون وتحسين سمة لعملائها في <strong className="font-bold text-slate-800">{cityData.name}</strong>، {cityData.desc}. نضمن لك أفضل الحلول المالية بأسرع وقت وأعلى احترافية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/966570856657" className="bg-saddad-gold text-slate-950 text-center px-8 py-4 rounded-xl font-bold hover:bg-saddad-gold-light transition-all flex items-center justify-center gap-2 shadow-lg">
              <PhoneCall size={20} /> تواصل معنا من {cityData.name}
            </a>
            <Link href="/contact" className="bg-white text-slate-800 border-2 border-slate-200 text-center px-8 py-4 rounded-xl font-bold hover:border-saddad-gold transition-all flex items-center justify-center gap-2">
              <ArrowLeft size={18} /> استشارة مجانية
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-10 text-right">خدماتنا في {cityData.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: `تمويل شخصي ${cityData.name}`, href: "/tamweel-shakhsi", d: `قروض وتسهيلات شخصية للموظفين والمتقاعدين في ${cityData.name} بهامش ربح تنافسي وموافقة سريعة.` },
            { t: `تمويل عقاري ${cityData.name}`, href: "/tamweel-aqari", d: `تمويل شراء الفلل والشقق والأراضي في ${cityData.name} بدون دفعة أولى بأقساط ميسرة.` },
            { t: `سداد تعثرات ${cityData.name}`, href: "/sadad-tathorrat", d: `حلول متكاملة لتسوية الديون البنكية وإعادة جدولتها وتحسين سمة لعملاء ${cityData.name}.` },
            { t: `تحصيل ديون ${cityData.name}`, href: "/tahseel-doyoon", d: `استرداد مستحقاتك التجارية المتعثرة في ${cityData.name} بأساليب قانونية واحترافية.` },
            { t: `خدمات سمة ${cityData.name}`, href: "/khadamat-simah", d: `تحسين تقييم سمة وتصحيح السجل الائتماني ومتابعة التحديثات لعملاء ${cityData.name}.` },
            { t: "استشارة مالية مجانية", href: "/contact", d: `تواصل مع خبرائنا الماليين للحصول على استشارة مخصصة تتناسب مع احتياجاتك في ${cityData.name}.` },
          ].map((s, i) => (
            <Link key={i} href={s.href} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-saddad-gold hover:shadow-lg transition-all group text-right block">
              <CheckCircle2 size={20} className="text-saddad-gold mb-3" />
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-saddad-blue transition-colors">{s.t}</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">{s.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 text-right space-y-6 text-slate-700 font-light leading-loose">
        <h2 className="text-2xl font-bold text-slate-900">نجد السداد في {cityData.name}: شريكك المالي الموثوق</h2>
        <p>تُوفّر شركة نجد السداد للحلول المالية والتطوير العقاري خدماتها المالية الاحترافية لعملائها في {cityData.name} عن بُعد وباتصال مباشر. فريقنا من الخبراء الماليين يمتلك خبرة واسعة في سوق التمويل السعودي ويستطيع تقديم أفضل الحلول لجميع احتياجاتك المالية سواءً كنت تبحث عن تمويل شخصي أو عقاري أو سداد تعثرات أو تحصيل ديون أو تحسين سجلك في سمة.</p>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-right">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">أسئلة شائعة عن خدماتنا في {cityData.name}</h2>
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
          <h2 className="text-3xl font-bold mb-4">تواصل معنا من {cityData.name} الآن</h2>
          <p className="text-slate-300 font-light mb-8">فريق نجد السداد جاهز لخدمتك من {cityData.name}. احصل على استشارة مجانية وأفضل حلول مالية تناسب احتياجاتك.</p>
          <a href="https://wa.me/966570856657" className="bg-saddad-gold text-slate-950 px-10 py-4 rounded-xl font-bold hover:bg-saddad-gold-light transition-all inline-flex items-center gap-2">
            <PhoneCall size={20} /> ابدأ الآن عبر واتساب
          </a>
        </div>
      </section>
    </div>
  );
}
