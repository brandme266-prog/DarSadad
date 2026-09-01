"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, Landmark, ShieldCheck, ChevronLeft, CheckCircle2, TrendingUp, Users } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      {/* Enhanced Hero Section with Real Photography */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-white">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/70 rounded-bl-[100px]"></div>
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-saddad-gold/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-saddad-blue/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-right lg:col-span-7"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saddad-gold/10 border border-saddad-gold/25 mb-6">
                <span className="w-2 h-2 rounded-full bg-saddad-gold animate-pulse"></span>
                <span className="text-xs font-bold text-saddad-gold">شريكك المالي المعتمد في الرياض</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.25] text-slate-900 mb-6 tracking-tight">
                طريقك الذكي والميسر <br/> 
                <span className="text-saddad-gold font-bold">للاستقرار والنمو المالي</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-light max-w-xl">
                في <strong className="font-bold text-slate-800">نجد السداد</strong>، نوفر لك حلولاً تمويلية معتمدة للتمويل العقاري والشخصي وخدمات تحصيل ديون الشركات باحترافية وسرعة فائقة.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link href="/services" className="bg-saddad-gold text-white text-center px-8 py-4 rounded-xl font-bold hover:bg-saddad-gold-light hover:text-slate-900 transition-all flex items-center justify-center gap-3 shadow-lg shadow-saddad-gold/25 group">
                  <span className="text-base">اطلب استشارتك الآن</span>
                  <ArrowLeft size={18} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
                </Link>
                <a href="https://wa.me/966570856657" className="bg-white text-slate-700 border-2 border-slate-200 text-center px-8 py-4 rounded-xl font-bold hover:border-saddad-gold hover:text-saddad-gold transition-all flex items-center justify-center">
                  تواصل عبر واتساب
                </a>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3 space-x-reverse">
                  <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center font-bold text-xs text-slate-600">✓</div>
                  <div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center font-bold text-xs text-slate-700">★</div>
                  <div className="w-10 h-10 rounded-full bg-saddad-gold border-2 border-white flex items-center justify-center text-white text-xs font-bold">+5k</div>
                </div>
                <div className="text-sm font-light text-slate-500">
                  أكثر من <span className="font-bold text-slate-900">5,000+</span> عميل تم خدمتهم بنجاح
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Photo Card Composition */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Main Image Frame with Smooth Rounded Corners */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xl bg-white aspect-[4/3] w-full">
                <Image
                  src="/images/hero-banner.jpg"
                  alt="نجد السداد للحلول المالية والتطوير العقاري"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4 left-4 text-white">
                  <span className="bg-saddad-gold text-slate-900 text-xs font-bold px-3 py-1 rounded-full mb-1 inline-block">
                    خدمات مالية وتمويلية
                  </span>
                  <p className="text-sm font-medium">مؤسسة مرخصة تقدم استشارات حلول التمويل وسداد التعثرات</p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-saddad-gold/15 rounded-xl flex items-center justify-center text-saddad-gold">
                  <TrendingUp size={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">نسبة إنجاز المعاملات</p>
                  <p className="text-xl font-bold text-slate-900">99.8%</p>
                </div>
              </motion.div>

              {/* Floating Trust Badge */}
              <div className="absolute -top-4 -left-4 bg-slate-900 text-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2">
                <ShieldCheck size={20} className="text-saddad-gold" />
                <span className="text-xs font-bold">معاملات بنكية معتمدة</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="border-y border-slate-100 bg-slate-50 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-20 text-slate-400 text-sm font-medium">
          <div className="flex items-center gap-2"><Building2 size={18} className="text-saddad-gold"/> تمويل عقاري وشخصي</div>
          <div className="flex items-center gap-2"><Landmark size={18} className="text-saddad-gold"/> سداد تعثرات وتسوية سمة</div>
          <div className="flex items-center gap-2"><Users size={18} className="text-saddad-gold"/> تحصيل ديون الشركات</div>
        </div>
      </div>

      {/* Bento Grid with Embedded Photo Cards */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-saddad-gold font-bold text-sm tracking-widest uppercase mb-2 block">خدماتنا الرائدة</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">حلول متكاملة تغطي كافة احتياجاتك</h2>
            <p className="text-slate-500 font-light">
              نضمن لك إنجاز المعاملات وتوفير السيولة بأعلى كفاءة وأسرع وقت ممكن.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Real Estate with Visual Photo */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col md:flex-row justify-between"
            >
              <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-saddad-gold mb-6 shadow-sm">
                    <Building2 size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">تمويل عقاري للأفراد بالرياض</h3>
                  <p className="text-slate-500 font-light mb-6 leading-relaxed text-sm">
                    امتلك عقارك أو منزلك بشروط ميسرة بدون تعقيدات الدفعة الأولى مع حلول سداد ممتدة ومناسبة لميزانيتك.
                  </p>
                </div>
                
                <Link href="/services" className="text-slate-900 text-sm font-bold hover:text-saddad-gold transition-colors inline-flex items-center gap-1 w-max">
                  تفاصيل التمويل العقاري <ChevronLeft size={16} />
                </Link>
              </div>

              <div className="relative w-full md:w-5/12 h-56 md:h-auto min-h-[220px]">
                <Image
                  src="/images/real-estate.jpg"
                  alt="تمويل عقاري الرياض"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
            </motion.div>

            {/* Card 2: Debt Collection with Photo */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="relative h-44 w-full">
                <Image
                  src="/images/business-debt.jpg"
                  alt="تحصيل ديون الشركات"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>

              <div className="p-6 pt-2 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">تحصيل ديون الشركات</h3>
                  <p className="text-slate-500 font-light mb-4 text-xs leading-relaxed">
                    استرداد المستحقات المالية المتعثرة للشركات والمؤسسات بأساليب نظامية وقانونية تضمن الحفاظ على سمعتكم.
                  </p>
                </div>
                
                <Link href="/services" className="text-slate-900 text-xs font-bold hover:text-saddad-gold transition-colors inline-flex items-center gap-1 w-max">
                  تفاصيل التحصيل <ChevronLeft size={14} />
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Personal Finance with Photo */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="relative h-44 w-full">
                <Image
                  src="/images/personal-finance.jpg"
                  alt="تمويل شخصي وسداد تعثرات"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>

              <div className="p-6 pt-2 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">تمويل شخصي وسداد تعثرات</h3>
                  <p className="text-slate-500 font-light mb-4 text-xs leading-relaxed">
                    سيولة نقدية وتسهيلات تمويل شخصي مع معالجة وإعادة جدولة المتعثرات في سمة لتسوية وضعك المالي.
                  </p>
                </div>
                
                <Link href="/services" className="text-slate-900 text-xs font-bold hover:text-saddad-gold transition-colors inline-flex items-center gap-1 w-max">
                  تفاصيل التمويل الشخصي <ChevronLeft size={14} />
                </Link>
              </div>
            </motion.div>

            {/* Card 4: Wide CTA Banner */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 bg-slate-900 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-center relative overflow-hidden text-white"
            >
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-saddad-gold/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="bg-saddad-gold/20 text-saddad-gold text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                    موافقة فورية
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">هل تحتاج استشارة مالية مخصصة؟</h3>
                  <p className="text-slate-300 font-light text-sm max-w-md">
                    فريقنا المتخصص في الرياض جاهز لمساعدتك في الحصول على أفضل العروض التمويلية وسداد الالتزامات.
                  </p>
                </div>
                <a 
                  href="https://wa.me/966570856657" 
                  className="shrink-0 bg-saddad-gold text-slate-950 px-8 py-4 rounded-xl text-sm font-bold hover:bg-saddad-gold-light transition-colors shadow-lg"
                >
                  تواصل معنا الآن
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust & Credentials Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saddad-gold/10 border border-saddad-gold/20 mb-4">
              <ShieldCheck size={14} className="text-saddad-gold" />
              <span className="text-xs font-bold text-saddad-gold">جهة مرخصة ومعتمدة رسمياً</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">نحن معتمدون ومرخّصون</h2>
            <p className="text-slate-500 font-light max-w-xl mx-auto">نجد السداد مؤسسة مالية مسجلة ومرخصة من الجهات الحكومية السعودية المختصة، نعمل بشفافية ومهنية عالية.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* CR */}
            <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 text-right overflow-hidden group hover:border-saddad-gold/30 hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-saddad-gold rounded-r-full"></div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                <span className="text-2xl">🏛️</span>
              </div>
              <p className="text-xs text-slate-400 mb-1 font-medium">وزارة التجارة</p>
              <h3 className="text-lg font-bold text-slate-900 mb-2">السجل التجاري</h3>
              <p className="text-2xl font-bold text-saddad-blue dir-ltr text-left" dir="ltr">1010852488</p>
              <p className="text-xs text-green-600 font-bold mt-2 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse"></span>
                نشط ومُفعّل
              </p>
            </div>

            {/* VAT */}
            <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 text-right overflow-hidden group hover:border-saddad-gold/30 hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-saddad-gold rounded-r-full"></div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                <span className="text-2xl">📋</span>
              </div>
              <p className="text-xs text-slate-400 mb-1 font-medium">هيئة الزكاة والضريبة والجمارك</p>
              <h3 className="text-lg font-bold text-slate-900 mb-2">التسجيل الضريبي (VAT)</h3>
              <p className="text-2xl font-bold text-saddad-blue" dir="ltr">311520029500003</p>
              <p className="text-xs text-green-600 font-bold mt-2 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse"></span>
                مسجل ونشط
              </p>
            </div>

            {/* Chamber */}
            <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 text-right overflow-hidden group hover:border-saddad-gold/30 hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-saddad-gold rounded-r-full"></div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                <span className="text-2xl">🏢</span>
              </div>
              <p className="text-xs text-slate-400 mb-1 font-medium">الغرفة التجارية الصناعية بالرياض</p>
              <h3 className="text-lg font-bold text-slate-900 mb-2">عضوية الغرفة التجارية</h3>
              <p className="text-2xl font-bold text-saddad-blue" dir="ltr">805713</p>
              <p className="text-xs text-green-600 font-bold mt-2 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse"></span>
                ساري حتى 2027
              </p>
            </div>
          </div>

          {/* Authority Logos Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              { label: "وزارة التجارة", en: "Ministry of Commerce" },
              { label: "هيئة الزكاة والضريبة", en: "ZATCA" },
              { label: "الغرفة التجارية الرياض", en: "Riyadh Chamber" },
              { label: "البنك المركزي السعودي", en: "SAMA" },
            ].map((org, i) => (
              <div key={i} className="flex flex-col items-center gap-1 text-center">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                  <Landmark size={18} className="text-slate-500" />
                </div>
                <span className="text-[10px] text-slate-500 font-medium">{org.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
