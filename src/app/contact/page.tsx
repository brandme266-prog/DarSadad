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
            <div className="flex flex-col items-center justify-center h-full text-center py-10">
              <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25D366]"><path d="m22 16.92-3.13-1.04a2 2 0 0 0-2.19.46l-1.4 1.4a15.06 15.06 0 0 1-6.66-6.66l1.4-1.4a2 2 0 0 0 .46-2.19L9.44 4.36a2 2 0 0 0-2.31-1.32c-2.45.37-4.13 2.5-4.13 5 0 8.84 7.16 16 16 16 2.5 0 4.63-1.68 5-4.13a2 2 0 0 0-1.32-2.3Z"/></svg>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-slate-900">تواصل معنا مباشرة عبر واتساب</h2>
              <p className="text-slate-500 font-light text-sm mb-8 max-w-sm mx-auto">لضمان سرعة الرد وتقديم خدمة أفضل، نرجو منك التواصل معنا مباشرة عبر تطبيق واتساب وسيقوم فريقنا بخدمتك فوراً.</p>
              
              <a 
                href="https://wa.me/00966570856657" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#20b958] transition-all flex items-center justify-center gap-3 text-lg shadow-lg shadow-[#25D366]/20"
              >
                <span>ابدأ المحادثة الآن</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 16.92-3.13-1.04a2 2 0 0 0-2.19.46l-1.4 1.4a15.06 15.06 0 0 1-6.66-6.66l1.4-1.4a2 2 0 0 0 .46-2.19L9.44 4.36a2 2 0 0 0-2.31-1.32c-2.45.37-4.13 2.5-4.13 5 0 8.84 7.16 16 16 16 2.5 0 4.63-1.68 5-4.13a2 2 0 0 0-1.32-2.3Z"/></svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
