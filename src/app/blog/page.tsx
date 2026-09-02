import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronLeft, BookOpen, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "المقالات والدليل المالي | شركة نجد السداد للحلول المالية بالرياض",
  description: "مقالات حصرية ونصائح مالية متخصصة حول التمويل العقاري، التمويل الشخصي، سداد التعثرات البنكية، وتسوية سمة، وتحصيل ديون الشركات في السعودية.",
  keywords: ["مقالات تمويل", "دليل التمويل العقاري الرياض", "كيفية سداد تعثرات سمة", "تحصيل الديون في السعودية", "نجد السداد"],
};

export const articles = [
  {
    slug: "تمويل-عقاري-بدون-دفعة-اولى-الرياض",
    title: "شروط الحصول على تمويل عقاري بدون دفعة أولى في الرياض 2026",
    summary: "تعرف على كل التفاصيل والخطوات المطلوبة لامتلاك فيلا أو شقة سكنية في الرياض بدون الحاجة لدفعة أولى مسبقة وبأقساط ميسرة.",
    category: "تمويل عقاري",
    date: "1 سبتمبر 2026",
    readTime: "4 دقائق",
    image: "/images/تمويل-عقاري-بدون-دفعة-اولى-الرياض.jpg",
  },
  {
    slug: "سداد-تعثرات-سمة-وتسوية-القروض",
    title: "دليلك الشامل لسداد التعثرات البنكية وتحسين السجل الائتماني في سمة",
    summary: "خطوات عملية وقانونية لمعالجة القروض المتعثرة وإعادة جدولتها والحصول على إخلاء طرف رسمي لاستعادة أهليتك البنكية.",
    category: "سداد تعثرات",
    date: "28 أغسطس 2026",
    readTime: "5 دقائق",
    image: "/images/سداد-تعثرات-سمة-وتسوية-القروض.jpg",
  },
  {
    slug: "حلول-تحصيل-ديون-الشركات-السعودية",
    title: "طرق تحصيل ديون الشركات والمؤسسات وحماية التدفقات النقدية",
    summary: "كيف تضمن استرداد مستحقات شركتك المالية بأساليب نظامية وقانونية معتمدة تحفظ سمعتك التجارية وتسرع دوران رأس المال.",
    category: "تحصيل ديون",
    date: "22 أغسطس 2026",
    readTime: "6 دقائق",
    image: "/images/حلول-تحصيل-ديون-الشركات-السعودية.jpg",
  },
  {
    slug: "افضل-خيارات-التمويل-الشخصي-الرياض",
    title: "أفضل برامج التمويل الشخصي للموظفين حتى مليون ريال في الرياض",
    summary: "مقارنة شاملة بين برامج التمويل الشخصي والسيولة الفورية للقطاع الحكومي والخاص مع أفضل هوامش ربح وفترات سداد ميسرة.",
    category: "تمويل شخصي",
    date: "15 أغسطس 2026",
    readTime: "4 دقائق",
    image: "/images/hero-banner.jpg",
  },
  {
    slug: "نجد-السداد-افضل-شركة-حلول-مالية",
    title: "شركة نجد السداد: خيارك الأول للحلول المالية وسداد التعثرات بالرياض",
    summary: "تعرف على خدمات شركة نجد السداد الرائدة في تقديم الاستشارات، تحصيل الديون، والتمويل المبتكر لكل من الأفراد والشركات بأعلى معايير الاحترافية.",
    category: "خدمات الشركة",
    date: "5 سبتمبر 2026",
    readTime: "5 دقائق",
    image: "/images/hero-banner.jpg",
  },
  {
    slug: "الدليل-الشامل-لتحصيل-الديون-الرياض",
    title: "الدليل الشامل لتحصيل الديون وحل المنازعات المالية في السعودية",
    summary: "كيف تتجنب الديون المعدومة وتحافظ على حقوق شركتك؟ اكتشف استراتيجيات شركة نجد السداد المبتكرة لتحصيل الديون الودية والقانونية.",
    category: "تحصيل ديون",
    date: "8 سبتمبر 2026",
    readTime: "6 دقائق",
    image: "/images/business-debt.jpg",
  }
];

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="pt-32 pb-16 bg-slate-50 border-b border-slate-100 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-saddad-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <span className="text-saddad-gold font-bold text-xs tracking-widest uppercase mb-2 block">المركز المعرفي</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
            المقالات والدليل المالي
          </h1>
          <p className="text-slate-500 font-light text-lg">
            دليلك الموثوق للنصائح والحلول المالية، التمويل العقاري، وسداد التعثرات في المملكة العربية السعودية.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Featured Article */}
        <div className="mb-14">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 text-white">
            <div className="relative h-64 lg:h-auto lg:col-span-6 min-h-[300px]">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute top-4 right-4 bg-saddad-gold text-slate-950 text-xs font-bold px-3 py-1.5 rounded-full">
                مقال مميز
              </div>
            </div>
            
            <div className="p-8 lg:p-12 lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} className="text-saddad-gold" /> {articles[0].date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} className="text-saddad-gold" /> {articles[0].readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  <Link href={`/blog/${articles[0].slug}`} className="hover:text-saddad-gold transition-colors">
                    {articles[0].title}
                  </Link>
                </h2>
                <p className="text-slate-300 font-light text-sm leading-relaxed mb-6">
                  {articles[0].summary}
                </p>
              </div>

              <Link
                href={`/blog/${articles[0].slug}`}
                className="inline-flex items-center gap-2 bg-saddad-gold text-slate-950 px-6 py-3 rounded-xl font-bold text-sm hover:bg-saddad-gold-light transition-all w-max shadow-md"
              >
                <span>قراءة المقال كاملاً</span>
                <ArrowLeft size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 text-slate-400 text-xs mb-3 font-light">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-saddad-gold transition-colors leading-snug">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-slate-500 font-light text-xs leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center justify-between text-slate-800 hover:text-saddad-gold font-bold text-xs pt-4 border-t border-slate-100 transition-colors"
                >
                  <span>اقرأ المزيد</span>
                  <ChevronLeft size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
