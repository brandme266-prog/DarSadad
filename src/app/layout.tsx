import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const almarai = Almarai({
  weight: ["300", "400", "700"],
  subsets: ["arabic"],
  variable: "--font-almarai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "نجد السداد للحلول المالية | أفضل شركة حلول مالية، تمويل عقاري وشخصي بالرياض",
  description: "شركة نجد السداد بالرياض تقدم أفضل الحلول المالية: تمويل شخصي حتى مليون ريال، تمويل عقاري بدون دفعة أولى، تحصيل ديون للشركات، وسداد تعثرات بنكية بخطط ميسرة.",
  keywords: ["تمويل شخصي الرياض", "تمويل عقاري الرياض", "سداد تعثرات الرياض", "شركة تحصيل ديون الرياض", "نجد السداد للحلول المالية", "تسوية ديون الرياض", "استشارات مالية الرياض"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${almarai.variable} h-full antialiased font-sans`}>
      <body className="min-h-full flex flex-col bg-white text-slate-700 font-light selection:bg-saddad-gold/20 selection:text-saddad-blue">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
