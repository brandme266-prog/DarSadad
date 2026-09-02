import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight, PhoneCall, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { articles } from "../page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) return { title: "المقال غير موجود" };
  const content = articleContents[slug];
  return {
    title: `${article.title} | نجد السداد للحلول المالية`,
    description: article.summary,
    keywords: content?.keywords ?? [],
    openGraph: { title: article.title, description: article.summary, images: [article.image] },
  };
}

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

// ===================== محتوى المقالات الكامل =====================
import { articleContents } from "@/data/articlesContent";
function ContentSection({ section }: { section: typeof articleContents[string]["sections"][0] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 pt-6 border-t border-slate-100">{section.heading}</h2>
      {section.body && <p className="text-slate-600 font-light leading-loose">{renderWithLinks(section.body)}</p>}
      {section.numberedList && (
        <ol className="space-y-3 mr-4">
          {section.numberedList.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-saddad-gold text-slate-950 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              <span className="text-slate-700 font-light leading-relaxed">{renderWithLinks(item)}</span>
            </li>
          ))}
        </ol>
      )}
      {section.list && (
        <ul className="space-y-2">
          {section.list.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-saddad-gold shrink-0 mt-1" />
              <span className="text-slate-700 font-light leading-relaxed">{renderWithLinks(item)}</span>
            </li>
          ))}
        </ul>
      )}
      {section.table && (
        <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
          <table className="w-full text-sm text-right">
            <thead>
              <tr className="bg-slate-900 text-white">
                {section.table.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-bold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-4 py-3 font-light border-b border-slate-100 whitespace-nowrap ${ci === 0 ? "font-bold text-slate-800" : "text-slate-600"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.note && (
        <div className="bg-saddad-gold/10 border border-saddad-gold/20 rounded-xl p-4 flex items-start gap-3">
          <CheckCircle2 size={18} className="text-saddad-gold shrink-0 mt-0.5" />
          <p className="text-sm text-slate-700 font-light leading-relaxed">{section.note}</p>
        </div>
      )}
      {section.warning && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 font-light leading-relaxed">{section.warning}</p>
        </div>
      )}
    </div>
  );
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) notFound();

  const content = articleContents[slug];
  const relatedArticles = articles.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <article className="bg-white min-h-screen pt-32 pb-24">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-light">
          <Link href="/" className="hover:text-saddad-gold transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-saddad-gold transition-colors">المقالات</Link>
          <span>/</span>
          <span className="text-slate-600">{article!.category}</span>
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 text-right">
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 flex-wrap">
          <span className="bg-saddad-gold text-slate-950 font-bold px-3 py-1 rounded-full">{article!.category}</span>
          <span className="flex items-center gap-1"><Calendar size={13} /> {article!.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock size={13} /> وقت القراءة: {article!.readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">{article!.title}</h1>
        <p className="text-lg text-slate-500 font-light leading-relaxed border-r-4 border-saddad-gold pr-4">{article!.summary}</p>
      </header>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative h-72 sm:h-96 md:h-[420px] w-full rounded-3xl overflow-hidden shadow-lg">
          <Image src={article!.image} alt={article!.title} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 850px" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
        </div>
      </div>

      {/* Table of Contents */}
      {content && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-10">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-saddad-gold rounded-full inline-block"></span>
              محتويات المقال
            </h3>
            <ol className="space-y-2">
              {content.sections.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-slate-600 hover:text-saddad-gold transition-colors">
                  <span className="text-saddad-gold font-bold">{i + 1}.</span>
                  <span>{s.heading}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-right space-y-10">
        {content ? (
          <>
            <p className="text-lg text-slate-600 font-light leading-loose bg-slate-50 p-6 rounded-2xl border border-slate-100">
              {content.intro}
            </p>
            {content.sections.map((section, i) => (
              <ContentSection key={i} section={section} />
            ))}
            
            {content.faqs && content.faqs.length > 0 && (
              <div className="mt-16 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-saddad-gold rounded-full inline-block"></span>
                  الأسئلة الشائعة
                </h3>
                <div className="space-y-4">
                  {content.faqs.map((faq, idx) => (
                    <details key={idx} className="group bg-slate-50 rounded-2xl cursor-pointer">
                      <summary className="flex items-center justify-between p-5 font-bold text-slate-800 text-sm list-none select-none">
                        <span>{faq.q}</span>
                        <span className="bg-white p-1 rounded-full shadow-sm text-saddad-gold transition-transform group-open:rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </span>
                      </summary>
                      <div className="px-5 pb-5 text-slate-600 font-light text-sm leading-relaxed border-t border-slate-100 pt-4 mt-2">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {content.faqs && content.faqs.length > 0 && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": content.faqs.map(faq => ({
                      "@type": "Question",
                      "name": faq.q,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                      }
                    }))
                  })
                }}
              />
            )}
          </>
        ) : (
          <p className="text-slate-500 font-light">جاري إضافة المحتوى...</p>
        )}

        {/* CTA Card */}
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl my-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-saddad-gold/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saddad-gold/20 text-saddad-gold text-xs font-bold">
              استشارة مجانية 100%
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">هل لديك تساؤل حول هذا الموضوع؟</h3>
            <p className="text-slate-300 text-sm font-light max-w-md mx-auto leading-relaxed">
              مستشارونا الماليون في نجد السداد متاحون الآن للرد على كافة استفساراتك وتقديم دراسة شاملة ومجانية لحالتك.
            </p>
            <a href="https://wa.me/966570856657" className="bg-saddad-gold text-slate-950 px-8 py-4 rounded-xl font-bold text-sm hover:bg-saddad-gold-light transition-all inline-flex items-center gap-2 shadow-lg">
              <PhoneCall size={18} />
              <span>تواصل معنا عبر واتساب الآن</span>
            </a>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
        <h2 className="text-xl font-bold text-slate-900 mb-6 text-right">مقالات ذات صلة قد تهمك</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {relatedArticles.map((a, i) => (
            <Link key={i} href={`/blog/${a.slug}`} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-saddad-gold/30 hover:shadow-lg transition-all block">
              <div className="relative h-40 w-full overflow-hidden">
                <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="300px" />
              </div>
              <div className="p-4 text-right">
                <span className="text-[10px] bg-saddad-gold/15 text-slate-800 font-bold px-2 py-0.5 rounded-full">{a.category}</span>
                <h3 className="font-bold text-slate-800 text-sm mt-2 leading-snug group-hover:text-saddad-gold transition-colors line-clamp-2">{a.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 text-center">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-saddad-gold text-sm font-medium transition-colors border border-slate-200 px-6 py-3 rounded-xl hover:border-saddad-gold">
          <ArrowRight size={16} />
          <span>العودة لقائمة المقالات</span>
        </Link>
      </div>
    </article>
  );
}
