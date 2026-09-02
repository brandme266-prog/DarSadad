import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حاسبة التمويل الشخصي والعقاري | احسب قسطك الشهري - نجد السداد",
  description: "أداة مجانية لحساب قسط التمويل الشخصي والعقاري في السعودية. اعرف قسطك الشهري، إجمالي الأرباح، والراتب المطلوب لتمويلك في ثوانٍ مع حاسبة نجد السداد.",
  keywords: [
    "حاسبة تمويل",
    "حاسبة التمويل الشخصي",
    "حاسبة التمويل العقاري",
    "حساب القسط الشهري",
    "نسبة الاستقطاع",
    "كم استحق قرض",
    "حاسبة القروض السعودية",
    "أقل نسبة فائدة",
    "تمويل شخصي الرياض",
    "حاسبة التمويل نجد السداد"
  ],
  alternates: {
    canonical: "https://brand1me.com/hasiba",
  },
  openGraph: {
    title: "حاسبة التمويل الشخصي والعقاري | احسب قسطك الشهري - نجد السداد",
    description: "أداة مجانية لحساب قسط التمويل الشخصي والعقاري في السعودية. اعرف قسطك الشهري، إجمالي الأرباح، والراتب المطلوب لتمويلك في ثوانٍ.",
    url: "https://brand1me.com/hasiba",
    type: "website",
    images: [
      {
        url: "https://brand1me.com/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "حاسبة التمويل الشخصي والعقاري",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "حاسبة التمويل الشخصي والعقاري | احسب قسطك الشهري",
    description: "أداة مجانية لحساب قسط التمويل الشخصي والعقاري في السعودية. اعرف قسطك في ثوانٍ.",
    images: ["https://brand1me.com/images/hero-banner.jpg"],
  },
};

export default function HasibaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
