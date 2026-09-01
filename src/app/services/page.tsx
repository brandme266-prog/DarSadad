"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Handshake, TrendingUp, CreditCard, ChevronLeft, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "تمويل عقاري للأفراد بالرياض",
      icon: <Building2 size={24} strokeWidth={2} />,
      image: "/images/real-estate.jpg",
      description: "نقدم أفضل برامج التمويل العقاري للأفراد في الرياض، بما في ذلك خيارات التمويل بدون دفعة أولى وتسهيل امتلاك الفلل والشقق السكنية بأقساط ميسرة وممتدة.",
      features: ["بدون دفعة أولى مسبقة", "فترات سداد مرنة تصل لـ 25 سنة", "متوافق مع الضوابط الشرعية"]
    },
    {
      id: 2,
      title: "تحصيل ديون الشركات والمؤسسات",
      icon: <Handshake size={24} strokeWidth={2} />,
      image: "/images/business-debt.jpg",
      description: "حلول احترافية متكاملة لاسترداد الديون المتعثرة والمستحقات المالية للشركات والمصانع عبر فريق قانوني متخصص يحفظ حقوقكم وعلاقاتكم التجارية.",
      features: ["متابعة قانونية وإدارية دقيقة", "نسب تحصيل عالية وناجحة", "تقارير دورية وشفافية كاملة"]
    },
    {
      id: 3,
      title: "سداد تعثرات وتسوية سمة",
      icon: <TrendingUp size={24} strokeWidth={2} />,
      image: "/images/personal-finance.jpg",
      description: "خدمات معالجة التعثرات البنكية وإعادة جدولة القروض والديون، بالإضافة إلى تحسين السجل الائتماني في منصة سمة لتمكينك من استعادة أهليتك التمويلية.",
      features: ["إعادة جدولة ميسرة", "تحديث فوري لبيانات سمة", "استشارات مالية وقانونية"]
    },
    {
      id: 4,
      title: "تمويل شخصي وسيولة نقدية",
      icon: <CreditCard size={24} strokeWidth={2} />,
      image: "/images/hero-banner.jpg",
      description: "نوفر لك أسرع برامج التمويل الشخصي في الرياض للموظفين في القطاعين الحكومي والخاص لتلبية التزاماتك العاجلة بمبالغ تصل حتى مليون ريال.",
      features: ["موافقة سريعة خلال 24 ساعة", "هامش ربح تنافسي", "إجراءات سهلة وبسيطة"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Clean Header */}
      <div className="pt-32 pb-16 bg-slate-50 border-b border-slate-100 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-saddad-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-saddad-gold font-bold text-xs tracking-widest uppercase mb-2 block">خدمات نجد السداد</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
              حلولنا التمويلية والمالية
            </h1>
            <p className="text-slate-500 font-light text-lg">
              باقات مدروسة بعناية لتوفير السيولة وحل التعثرات وتأمين مستقبلك العقاري في الرياض.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid with Photos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map(service => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4 text-white flex items-center gap-2">
                  <div className="w-10 h-10 bg-saddad-gold rounded-xl flex items-center justify-center text-slate-900 shadow">
                    {service.icon}
                  </div>
                  <h2 className="text-xl font-bold">{service.title}</h2>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-slate-500 font-light mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 size={16} className="text-saddad-gold shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-between w-full bg-slate-50 hover:bg-saddad-gold hover:text-slate-950 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-800 transition-all border border-slate-100"
                >
                  <span>تقديم طلب لهذه الخدمة</span>
                  <ChevronLeft size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
