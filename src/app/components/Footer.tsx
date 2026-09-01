"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Link as LinkIcon, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col gap-4 mb-6">
              <div className="bg-white rounded-2xl p-2 inline-flex items-center justify-center w-fit">
                <Image 
                  src="/images/logo.png" 
                  alt="نجد السداد" 
                  width={100} 
                  height={100} 
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">نجد السداد</span>
            </Link>
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
              مؤسسة معتمدة ومتخصصة في تقديم استشارات وحلول التمويل العقاري والشخصي وسداد التعثرات وتحصيل ديون الشركات بالرياض.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 border-r-2 border-saddad-gold pr-3">روابط سريعة</h3>
            <ul className="space-y-3.5 text-sm font-light text-slate-400">
              <li><Link href="/" className="hover:text-saddad-gold transition-colors">الرئيسية</Link></li>
              <li><Link href="/services" className="hover:text-saddad-gold transition-colors">خدماتنا التمويلية</Link></li>
              <li><Link href="/blog" className="hover:text-saddad-gold transition-colors">المقالات والدليل المالي</Link></li>
              <li><Link href="/contact" className="hover:text-saddad-gold transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 border-r-2 border-saddad-gold pr-3">أبرز خدماتنا</h3>
            <ul className="space-y-3.5 text-sm font-light text-slate-400">
              <li><Link href="/services" className="hover:text-saddad-gold transition-colors">تمويل عقاري بدون دفعة أولى</Link></li>
              <li><Link href="/services" className="hover:text-saddad-gold transition-colors">تمويل شخصي حتى مليون ريال</Link></li>
              <li><Link href="/services" className="hover:text-saddad-gold transition-colors">تحصيل ديون الشركات بالرياض</Link></li>
              <li><Link href="/services" className="hover:text-saddad-gold transition-colors">سداد تعثرات وتسوية سمة</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 border-r-2 border-saddad-gold pr-3">معلومات التواصل</h3>
            <div className="space-y-4 text-sm font-light text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} strokeWidth={1.5} className="text-saddad-gold shrink-0 mt-0.5" />
                <p>حي العليا، مدينة الرياض، المملكة العربية السعودية</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} strokeWidth={1.5} className="text-saddad-gold shrink-0" />
                <a href="tel:00966570856657" dir="ltr" className="hover:text-white transition-colors font-medium">00966570856657</a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} strokeWidth={1.5} className="text-saddad-gold shrink-0" />
                <a href="mailto:info@brand1me.com" className="hover:text-white transition-colors">info@brand1me.com</a>
              </div>
            </div>
          </div>

        </div>
        
        {/* Copyrights */}
        <div className="border-t border-slate-800 pt-8 flex flex-col lg:flex-row justify-between items-center text-xs font-light text-slate-500 gap-4">
          <p>© 2026 شركة نجد السداد للحلول المالية والاستشارات. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-1 font-medium bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
            <span>صُنع بكل فخر بواسطة</span>
            <a href="https://brand1me.com" target="_blank" rel="noopener noreferrer" className="text-saddad-gold hover:text-white transition-colors mx-1">
              شركة BrandMe
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-slate-400 transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
