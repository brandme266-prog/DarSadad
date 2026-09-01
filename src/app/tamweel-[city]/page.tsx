import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, PhoneCall, ArrowLeft, MapPin, ChevronDown, CheckSquare } from "lucide-react";

const cities: Record<string, { name: string; services: string[]; desc: string }> = {
  jeddah: {
    name: "جدة",
    services: ["تمويل شخصي جدة", "تمويل عقاري جدة", "سداد تعثرات جدة", "تحصيل ديون جدة", "خدمات سمة جدة", "تمويل شخصي بدون كفيل جدة", "قرض عقاري جدة", "تسوية ديون بنكية جدة", "استشارات مالية جدة"],
    desc: "المركز التجاري الأول في المملكة وثاني أكبر مدينة"
  },
  makkah: {
    name: "مكة المكرمة",
    services: ["تمويل شخصي مكة", "تمويل عقاري مكة", "سداد تعثرات مكة", "تحصيل ديون مكة", "خدمات سمة مكة", "قروض ميسرة مكة", "تمويل عقاري مكة المكرمة", "تسوية قروض مكة"],
    desc: "أقدس البقاع وعاصمة منطقة مكة المكرمة"
  },
  dammam: {
    name: "الدمام",
    services: ["تمويل شخصي الدمام", "تمويل عقاري الدمام", "سداد تعثرات الدمام", "تحصيل ديون الدمام", "خدمات سمة الدمام", "قرض شخصي الدمام", "تمويل عقاري بدون دفعة الدمام", "شركة تحصيل ديون الدمام"],
    desc: "عاصمة المنطقة الشرقية وبوابة الخليج"
  },
  khobar: {
    name: "الخبر",
    services: ["تمويل شخصي الخبر", "تمويل عقاري الخبر", "سداد تعثرات الخبر", "تحصيل ديون الخبر", "خدمات سمة الخبر", "سيولة فورية الخبر", "تمويل الشركات الخبر", "مكتب تحصيل ديون الخبر"],
    desc: "المدينة الاقتصادية في المنطقة الشرقية"
  },
  taif: {
    name: "الطائف",
    services: ["تمويل شخصي الطائف", "تمويل عقاري الطائف", "سداد تعثرات الطائف", "تحصيل ديون الطائف", "خدمات سمة الطائف", "تمويل عقاري مدعوم الطائف", "سداد مديونيات الطائف"],
    desc: "عاصمة منطقة مكة الصيفية والمدينة الجبلية الجميلة"
  },
  medina: {
    name: "المدينة المنورة",
    services: ["تمويل شخصي المدينة المنورة", "تمويل عقاري المدينة المنورة", "سداد تعثرات المدينة المنورة", "تحصيل ديون المدينة المنورة", "خدمات سمة المدينة المنورة", "قروض المدينة المنورة", "تمويل عقاري المدينة", "سداد سمة المدينة المنورة"],
    desc: "ثاني أقدس البقاع في الإسلام"
  },
  riyadh: {
    name: "الرياض",
    services: ["تمويل شخصي الرياض", "تمويل عقاري الرياض", "سداد تعثرات الرياض", "تحصيل ديون الرياض", "خدمات سمة الرياض", "تمويل شخصي بدون كفيل الرياض", "قرض شخصي سريع الرياض", "تمويل شخصي مليون ريال", "تسهيلات شخصية الرياض"],
    desc: "عاصمة المملكة وأكبر مراكزها المالية"
  }
};

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityData = cities[city];
  if (!cityData) return { title: "المدينة غير موجودة" };
  
  return {
    title: `${cityData.services[0]} | ${cityData.services[1]} | سداد تعثرات وتحصيل ديون | نجد السداد`,
    description: `هل تبحث عن ${cityData.services[0]} أو ${cityData.services[1]}؟ تقدم شركة نجد السداد أفضل الحلول المالية في ${cityData.name} تشمل سداد التعثرات وتحصيل الديون.`,
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
    { q: `هل تقدم نجد السداد خدمات التمويل الشخصي في ${cityData.name}؟`, a: `نعم، نحن نقدم خدمات ${cityData.services[0]} بأفضل المعايير. نجد السداد معتمدة لتقديم التمويل الشخصي والعقاري لجميع عملاء ${cityData.name}.` },
    { q: `ما هي الشروط لطلب ${cityData.services[1]}؟`, a: `يمكنك الحصول على ${cityData.services[1]} إذا كنت موظفاً حكومياً أو في شركة معتمدة، ويمكن لفريقنا في ${cityData.name} مساعدتك في استخراج الموافقة وتخطي الدفعة الأولى.` },
    { q: `كيف يمكنني تصفية سجل سمة عبر ${cityData.services[2]}؟`, a: `يتولى خبراؤنا معالجة المديونيات وتسويتها بشكل قانوني وسريع لضمان تنظيف سجلك الائتماني في سمة لكل عملاء ${cityData.name}.` },
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      <section className="relative pt-32 pb-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-saddad-gold/5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saddad-gold/10 border border-saddad-gold/20 mb-5">
            <MapPin size={14} className="text-saddad-gold" />
            <span className="text-xs font-bold text-saddad-gold">خدماتنا المالية متاحة في {cityData.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            حلول مالية متكاملة في {cityData.name}<br/>
            <span className="text-saddad-gold text-3xl md:text-4xl">تمويل شخصي، عقاري، وتحصيل ديون</span>
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-3xl mb-10 leading-relaxed">
            إذا كنت تبحث عن <strong>{cityData.services[0]}</strong> أو <strong>{cityData.services[1]}</strong>، فإن شركة نجد السداد هي شريكك المالي الأفضل. نقدم في {cityData.name} خدمات <strong>{cityData.services[2]}</strong> و<strong>{cityData.services[3]}</strong> بأعلى مستويات الاحترافية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/00966570856657" className="bg-saddad-gold text-slate-950 text-center px-8 py-4 rounded-xl font-bold hover:bg-saddad-gold-light transition-all flex items-center justify-center gap-2 shadow-lg">
              <PhoneCall size={20} /> تواصل معنا من {cityData.name}
            </a>
            <Link href="/contact" className="bg-white text-slate-800 border-2 border-slate-200 text-center px-8 py-4 rounded-xl font-bold hover:border-saddad-gold transition-all flex items-center justify-center gap-2">
              <ArrowLeft size={18} /> استشارة مجانية
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-10 text-right">أبرز خدماتنا في {cityData.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-right border-b border-slate-200 pb-3">{cityData.services[0]}</h3>
            <ul className="space-y-3 text-right">
              <li className="flex items-start gap-2 text-slate-600"><CheckSquare size={18} className="text-saddad-gold shrink-0 mt-1" /> تمويل شخصي بدون كفيل للموظفين</li>
              <li className="flex items-start gap-2 text-slate-600"><CheckSquare size={18} className="text-saddad-gold shrink-0 mt-1" /> سرعة في الموافقة وإنجاز المعاملة في {cityData.name}</li>
              <li className="flex items-start gap-2 text-slate-600"><CheckSquare size={18} className="text-saddad-gold shrink-0 mt-1" /> هوامش ربح تنافسية وخيارات سداد مرنة</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-right border-b border-slate-200 pb-3">{cityData.services[1]}</h3>
            <ul className="space-y-3 text-right">
              <li className="flex items-start gap-2 text-slate-600"><CheckSquare size={18} className="text-saddad-gold shrink-0 mt-1" /> تمويل شراء منازل وعقارات في {cityData.name}</li>
              <li className="flex items-start gap-2 text-slate-600"><CheckSquare size={18} className="text-saddad-gold shrink-0 mt-1" /> حلول التمويل العقاري بدون دفعة أولى</li>
              <li className="flex items-start gap-2 text-slate-600"><CheckSquare size={18} className="text-saddad-gold shrink-0 mt-1" /> توحيد الالتزامات مع القرض العقاري</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-right border-b border-slate-200 pb-3">{cityData.services[2]}</h3>
            <ul className="space-y-3 text-right">
              <li className="flex items-start gap-2 text-slate-600"><CheckSquare size={18} className="text-saddad-gold shrink-0 mt-1" /> تسوية المديونيات المتأخرة والتعثرات البنكية</li>
              <li className="flex items-start gap-2 text-slate-600"><CheckSquare size={18} className="text-saddad-gold shrink-0 mt-1" /> تحديث بيانات سمة ورفع التقييم الائتماني</li>
              <li className="flex items-start gap-2 text-slate-600"><CheckSquare size={18} className="text-saddad-gold shrink-0 mt-1" /> إعادة جدولة القروض بقسط ميسر</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-right border-b border-slate-200 pb-3">{cityData.services[3]}</h3>
            <ul className="space-y-3 text-right">
              <li className="flex items-start gap-2 text-slate-600"><CheckSquare size={18} className="text-saddad-gold shrink-0 mt-1" /> استرداد مستحقات الشركات والمؤسسات في {cityData.name}</li>
              <li className="flex items-start gap-2 text-slate-600"><CheckSquare size={18} className="text-saddad-gold shrink-0 mt-1" /> أساليب قانونية لحماية التدفقات النقدية</li>
              <li className="flex items-start gap-2 text-slate-600"><CheckSquare size={18} className="text-saddad-gold shrink-0 mt-1" /> وساطة مالية وتسويات تجارية فعالة</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 text-right space-y-6 text-slate-700 font-light leading-loose">
        <h2 className="text-2xl font-bold text-slate-900">لماذا تختار نجد السداد في {cityData.name}؟</h2>
        <p>نحن نعلم أن البحث عن <strong>{cityData.services[0]}</strong> أو <strong>{cityData.services[1]}</strong> يتطلب الثقة والخبرة. كشركة رائدة في مجال الحلول المالية والمصرفية المعتمدة، نضمن لعملائنا في <strong>{cityData.name}</strong> الحصول على أفضل الخدمات والعروض المتاحة بالسوق.</p>
        <p>لا تقتصر خدماتنا على التمويل فقط، بل تمتد لتشمل إدارة المخاطر وتصحيح المسار المالي للشركات والأفراد عبر خدمات <strong>{cityData.services[2]}</strong> و<strong>{cityData.services[4]}</strong> لضمان استقرار مالي طويل الأمد.</p>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-right">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">الأسئلة الشائعة في {cityData.name}</h2>
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
        "name": `الخدمات المالية في ${cityData.name}`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "نجد السداد للحلول المالية والتطوير العقاري",
          "areaServed": { "@type": "City", "name": cityData.name }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `عروض تمويل ${cityData.name}`,
          "itemListElement": cityData.services.map(s => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": s }
          }))
        }
      })}} />
    </div>
  );
}
