import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight, Share2, PhoneCall, CheckCircle2 } from "lucide-react";
import { articles } from "../page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) return { title: "المقال غير موجود" };

  return {
    title: `${article.title} | نجد السداد للحلول المالية`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [article.image],
    }
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen pt-32 pb-24">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-saddad-gold text-xs font-medium transition-colors"
        >
          <ArrowRight size={14} />
          <span>العودة إلى قائمة المقالات</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 text-right">
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-light">
          <span className="bg-saddad-gold/15 text-slate-800 font-bold px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1"><Calendar size={13} /> {article.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock size={13} /> {article.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
          {article.title}
        </h1>

        <p className="text-lg text-slate-500 font-light leading-relaxed">
          {article.summary}
        </p>
      </header>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative h-72 sm:h-96 md:h-[450px] w-full rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 850px"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-slate-700 leading-loose text-base font-light space-y-8">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
          <h3 className="font-bold text-slate-900 text-sm mb-3">أبرز النقاط في هذا المقال:</h3>
          <ul className="space-y-2 text-xs text-slate-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-saddad-gold shrink-0" />
              <span>فهم الشروط والمتطلبات الأساسية وفق الأنظمة واللوائح البنكية المعمول بها.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-saddad-gold shrink-0" />
              <span>كيفية الاستفادة من برامج التمويل الميسرة وحساب الالتزامات بدقة.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-saddad-gold shrink-0" />
              <span>نصائح الخبراء الماليين في شركة نجد السداد لتسريع المعاملات.</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">مقدمة حول الحلول التمويلية المتاحة</h2>
        <p>
          تشهد المملكة العربية السعودية تطوراً متسارعاً في القطاع المالي والتمويلي، مما يتيح للمواطنين والمقيمين وأصحاب الأعمال خيارات متعددة للحصول على السيولة النقدية أو التمويل العقاري بدون عوائق معقدة. إن اختيار الحل المناسب يعتمد بالدرجة الأولى على دراسة الملاءة المالية واحتساب الالتزامات الشهرية بدقة لضمان استقرار التدفقات النقدية.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">كيف تساعدك نجد السداد في إنجاز معاملتك؟</h2>
        <p>
          نحن في نجد السداد نعمل كوسيط ومستشار مالي معتمد نربطك بأفضل الجهات التمويلية والبنوك لنوفر لك هوامش ربح تنافسية وتسهيلات تمتد لسنوات طويلة. فريقنا يدرس ملفك الائتماني ويقدم لك الحل الأمثل سواء كنت بحاجة لتمويل شخصي أو عقاري أو سداد تعثرات قائمة.
        </p>

        {/* CTA Card within the article */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl my-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 text-center space-y-4">
            <h3 className="text-2xl font-bold">هل ترغب في استشارة مجانية حول هذا الموضوع؟</h3>
            <p className="text-slate-300 text-xs font-light max-w-md mx-auto">
              مستشارونا الماليون في نجد السداد متاحون للرد على كافة استفساراتك وتقديم دراسة شاملة لحالتك.
            </p>
            <div className="pt-2 flex justify-center">
              <a
                href="https://wa.me/966570856657"
                className="bg-saddad-gold text-slate-950 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-saddad-gold-light transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <PhoneCall size={16} />
                <span>تواصل معنا عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
