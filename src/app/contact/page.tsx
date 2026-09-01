"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="pt-32 pb-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">اتصل بنا</h1>
          <p className="text-lg text-slate-500 font-light">
            فريق نجد السداد مستعد دائماً لتقديم الاستشارة المالية التي تناسبك.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-100"
          >
            <h2 className="text-2xl font-bold mb-8 text-slate-900">بيانات الاتصال</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-saddad-blue shrink-0">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1 text-slate-900">المقر الرئيسي</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">حي العليا، مدينة الرياض،<br/>المملكة العربية السعودية</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-saddad-blue shrink-0">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1 text-slate-900">الهاتف الموحد</h3>
                  <p className="text-slate-500 text-sm font-light tracking-wide" dir="ltr">00966570856657</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-saddad-blue shrink-0">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1 text-slate-900">البريد الإلكتروني</h3>
                  <p className="text-slate-500 text-sm font-light">info@brand1me.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <a href="https://wa.me/00966570856657" className="w-full bg-saddad-blue hover:bg-slate-800 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm">
                <span>تحدث معنا عبر واتساب</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 p-8 lg:p-10 bg-white rounded-2xl border border-slate-100 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-2 text-slate-900">نموذج المراسلة</h2>
            <p className="text-slate-500 font-light text-sm mb-8">املأ النموذج وسيقوم فريقنا بالتواصل معك في أقرب وقت.</p>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">الاسم الكامل <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-saddad-blue focus:border-saddad-blue transition-all" placeholder="أدخل اسمك الكريم" required />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">رقم الجوال <span className="text-red-500">*</span></label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-saddad-blue focus:border-saddad-blue transition-all" placeholder="05XXXXXXXX" dir="ltr" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">البريد الإلكتروني</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-saddad-blue focus:border-saddad-blue transition-all" placeholder="example@domain.com" dir="ltr" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">نوع الخدمة المطلوبة</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-saddad-blue focus:border-saddad-blue transition-all text-slate-700">
                    <option value="">اختر الخدمة...</option>
                    <option value="تمويل عقاري">تمويل عقاري</option>
                    <option value="تمويل شخصي">تمويل شخصي</option>
                    <option value="تحصيل ديون">تحصيل ديون للشركات</option>
                    <option value="سداد تعثرات">سداد تعثرات وتسوية ديون</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">تفاصيل الطلب <span className="text-red-500">*</span></label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-saddad-blue focus:border-saddad-blue transition-all resize-none" placeholder="اكتب تفاصيل طلبك أو استفسارك هنا..." required></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-saddad-blue text-white font-medium py-3.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 mt-2 text-sm"
              >
                <span>إرسال الطلب</span>
                <Send size={16} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
