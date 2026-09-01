import { Metadata } from 'next';
import { ShieldCheck, Target, Users, TrendingUp, Handshake } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'من نحن - شركة نجد السداد للحلول المالية والتطوير العقاري',
  description: 'تعرف على شركة نجد السداد، الشركة الرائدة في الرياض لتقديم الحلول التمويلية، التمويل العقاري، سداد التعثرات، وتحصيل ديون الشركات باحترافية.',
  openGraph: {
    title: 'من نحن - شركة نجد السداد للحلول المالية والتطوير العقاري',
    description: 'شريكك المالي الموثوق في المملكة العربية السعودية. نقدم حلولاً مالية مبتكرة تناسب احتياجاتك.',
  }
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "من نحن - شركة نجد السداد للحلول المالية والتطوير العقاري",
    "description": "تعرف على شركة نجد السداد، الشركة الرائدة في الرياض لتقديم الحلول التمويلية، التمويل العقاري، سداد التعثرات، وتحصيل ديون الشركات باحترافية.",
    "url": "https://brand1me.com/about",
    "publisher": {
      "@type": "Organization",
      "name": "شركة نجد السداد",
      "logo": {
        "@type": "ImageObject",
        "url": "https://brand1me.com/images/logo.png"
      }
    }
  };

  return (
    <>
      <Script id="about-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="min-h-screen bg-slate-50 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              من نحن - <span className="text-saddad-gold">نجد السداد</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              شركة نجد السداد للحلول المالية والتطوير العقاري، هي مؤسسة مالية سعودية معتمدة تتخذ من الرياض مقراً لها. نسعى دائماً لتقديم أفضل الحلول التمويلية والاستشارية التي تساعد الأفراد والشركات على تحقيق أهدافهم وتجاوز العقبات المالية بثقة وأمان.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-saddad-gold/10 rounded-2xl flex items-center justify-center text-saddad-gold mb-6">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">رؤيتنا</h2>
              <p className="text-slate-600 leading-relaxed">
                أن نكون الخيار الأول والشريك المالي الأبرز في المملكة العربية السعودية، من خلال تقديم خدمات مالية متكاملة تتميز بالشفافية، السرعة، والاحترافية، بما يتماشى مع رؤية المملكة 2030 في تعزيز الاستقرار الاقتصادي والنمو المستدام.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-saddad-gold/10 rounded-2xl flex items-center justify-center text-saddad-gold mb-6">
                <Handshake size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">رسالتنا</h2>
              <p className="text-slate-600 leading-relaxed">
                تقديم استشارات وحلول تمويلية مبنية على الفهم العميق لاحتياجات عملائنا، ومساعدتهم على تجاوز التعثرات المالية بأكثر الطرق أماناً وسرعة، مع الحفاظ على أعلى معايير الجودة والمصداقية في كل تعاملاتنا.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">لماذا تختار نجد السداد؟</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck size={24} />,
                  title: "موثوقية واعتماد",
                  desc: "مؤسسة مسجلة ومعتمدة من الجهات الرسمية، نضمن لك معاملات قانونية وآمنة 100%."
                },
                {
                  icon: <TrendingUp size={24} />,
                  title: "سرعة في الإنجاز",
                  desc: "نقدر قيمة وقتك، لذا نعمل على تخليص كافة المعاملات المالية في أسرع وقت ممكن."
                },
                {
                  icon: <Users size={24} />,
                  title: "فريق خبراء متخصص",
                  desc: "نضم نخبة من المستشارين الماليين والقانونيين ذوي الخبرة الطويلة في السوق السعودي."
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-saddad-blue mx-auto mb-4 border border-slate-100">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-saddad-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-saddad-blue/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لبدء رحلتك المالية معنا؟</h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                فريق نجد السداد جاهز للرد على استفساراتك وتقديم الاستشارة المالية التي تناسب وضعك الحالي. تواصل معنا الآن ولا تتردد.
              </p>
              <a href="https://wa.me/966570856657" className="inline-flex bg-saddad-gold text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors">
                تواصل معنا عبر واتساب
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
