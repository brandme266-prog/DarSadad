"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  PhoneCall,
  TrendingUp,
  Wallet,
  Clock,
  ChevronDown,
  ChevronUp,
  Info,
  CheckCircle2
} from "lucide-react";

// ===================== Types =====================
interface CalcResult {
  monthlyPayment: number;
  totalPayment: number;
  schedule: { month: number; payment: number; balance: number }[];
}

// ===================== Calculator Logic =====================
function calculateFinancing(
  principal: number,
  months: number
): CalcResult {
  // قرض حسن: لا توجد فوائد
  const monthlyPayment = principal / months;
  const totalPayment = principal;

  // Build amortization schedule (first 12 months only for display)
  const schedule = [];
  let balance = principal;
  for (let month = 1; month <= Math.min(months, 12); month++) {
    balance -= monthlyPayment;
    schedule.push({
      month,
      payment: monthlyPayment,
      balance: Math.max(0, balance),
    });
  }

  return { monthlyPayment, totalPayment, schedule };
}

function fmt(n: number) {
  return n.toLocaleString("ar-SA", { maximumFractionDigits: 0 });
}

// ===================== Main Page =====================
export default function CalculatorPage() {
  const [amount, setAmount] = useState(200000);
  const [months, setMonths] = useState(60);
  const [showSchedule, setShowSchedule] = useState(false);
  const [loanType, setLoanType] = useState<"personal" | "real-estate">("personal");

  const result = calculateFinancing(amount, months);
  const maxAmount = loanType === "real-estate" ? 2000000 : 1000000;
  const maxMonths = loanType === "real-estate" ? 360 : 60;

  const salaryNeeded = Math.ceil(result.monthlyPayment / (loanType === "real-estate" ? 0.45 : 0.33));

  const formatMonths = (m: number) => {
    const years = Math.floor(m / 12);
    const rem = m % 12;
    if (rem === 0) return `${years} ${years === 1 ? "سنة" : "سنوات"}`;
    return `${years} سنة و ${rem} شهر`;
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 pt-28 pb-20">
      {/* ── Header ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 rounded-full px-4 py-1.5 text-sm mb-5">
          <CheckCircle2 size={15} />
          <span className="font-medium">قرض حسن إسلامي 100%</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
          حاسبة القرض الحسن
          <span className="block text-saddad-gold">بدون أي فوائد</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          تمويل إسلامي نقي (قرض حسن). ما تستعيره هو تماماً ما تسدده، بدون أي هوامش ربح أو فوائد مركبة.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* ── LEFT: Controls ── */}
        <div className="lg:col-span-3 space-y-6">
          {/* Loan Type Toggle */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <p className="text-slate-700 text-sm font-bold mb-4">نوع التمويل (قرض حسن)</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => { setLoanType("personal"); setMonths(Math.min(months, 60)); setAmount(Math.min(amount, 1000000)); }}
                className={`py-3 px-4 rounded-xl font-bold text-sm transition-all border ${loanType === "personal" ? "bg-saddad-gold text-slate-950 border-saddad-gold shadow-md" : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200"}`}
              >
                🏦 تمويل شخصي
              </button>
              <button
                onClick={() => { setLoanType("real-estate"); setMonths(Math.min(months > 60 ? months : 240)); }}
                className={`py-3 px-4 rounded-xl font-bold text-sm transition-all border ${loanType === "real-estate" ? "bg-saddad-gold text-slate-950 border-saddad-gold shadow-md" : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200"}`}
              >
                🏠 تمويل عقاري
              </button>
            </div>
          </div>

          {/* Amount Slider */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <label className="text-slate-700 text-sm font-bold">مبلغ التمويل</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={amount}
                  onChange={e => setAmount(Math.min(maxAmount, Math.max(10000, Number(e.target.value))))}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-900 font-bold text-sm w-32 text-center focus:outline-none focus:border-saddad-gold focus:ring-1 focus:ring-saddad-gold"
                />
                <span className="text-slate-500 text-sm font-medium">ريال</span>
              </div>
            </div>
            <input
              type="range"
              min={10000}
              max={maxAmount}
              step={10000}
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-200 accent-saddad-gold"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
              <span>10,000 ريال</span>
              <span>{fmt(maxAmount)} ريال</span>
            </div>
          </div>

          {/* Duration Slider */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <label className="text-slate-700 text-sm font-bold">مدة السداد</label>
              <span className="text-saddad-gold font-bold text-sm bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">{formatMonths(months)}</span>
            </div>
            <input
              type="range"
              min={6}
              max={maxMonths}
              step={6}
              value={months}
              onChange={e => setMonths(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-200 accent-saddad-gold"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
              <span>6 أشهر</span>
              <span>{formatMonths(maxMonths)}</span>
            </div>

            {/* Quick duration picks */}
            <div className="mt-4 flex gap-2 flex-wrap">
              {(loanType === "real-estate" ? [60, 120, 180, 240, 300] : [12, 24, 36, 48, 60]).map(m => (
                <button
                  key={m}
                  onClick={() => setMonths(m)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all font-medium ${months === m ? "bg-saddad-gold text-slate-950 border-saddad-gold shadow-sm" : "bg-slate-50 border-slate-200 text-slate-600 hover:border-saddad-gold/50"}`}
                >
                  {formatMonths(m)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Results ── */}
        <div className="lg:col-span-2 space-y-5">
          {/* Main Monthly Payment Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay"></div>
            
            <p className="text-sm font-medium opacity-80 mb-1 relative z-10 text-saddad-gold">القسط الشهري (بدون فوائد)</p>
            <p className="text-4xl font-black mb-1 leading-none relative z-10">
              {fmt(result.monthlyPayment)}
            </p>
            <p className="text-sm font-medium opacity-80 relative z-10">ريال سعودي</p>

            <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-2 gap-3 relative z-10">
              <div>
                <p className="text-xs opacity-70 mb-0.5 font-medium">إجمالي المدفوع</p>
                <p className="font-bold text-sm">{fmt(result.totalPayment)} ر</p>
              </div>
              <div>
                <p className="text-xs opacity-70 mb-0.5 font-medium">إجمالي الفوائد</p>
                <p className="font-bold text-sm text-green-400 bg-green-900/40 inline-block px-2 py-0.5 rounded">0 ريال (صفر)</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-yellow-50 rounded-lg">
                  <Wallet size={14} className="text-saddad-gold" />
                </div>
                <span className="text-xs font-bold text-slate-700">الراتب المطلوب</span>
              </div>
              <p className="text-slate-900 font-black text-sm">{fmt(salaryNeeded)} ريال</p>
              <p className="text-xs text-slate-500 mt-0.5">بحد {loanType === "real-estate" ? "45%" : "33%"} استقطاع</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-green-100 rounded-lg">
                  <CheckCircle2 size={14} className="text-green-700" />
                </div>
                <span className="text-xs font-bold text-green-800">نسبة التكلفة</span>
              </div>
              <p className="text-green-700 font-black text-sm">0%</p>
              <p className="text-xs text-green-600 mt-0.5">قرض حسن 100%</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-slate-100 rounded-lg">
                  <Clock size={14} className="text-slate-700" />
                </div>
                <span className="text-xs font-bold text-slate-700">مدة السداد</span>
              </div>
              <p className="text-slate-900 font-black text-sm">{formatMonths(months)}</p>
              <p className="text-xs text-slate-500 mt-0.5">{months} قسطاً شهرياً</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-slate-100 rounded-lg">
                  <Calculator size={14} className="text-slate-700" />
                </div>
                <span className="text-xs font-bold text-slate-700">آلية السداد</span>
              </div>
              <p className="text-slate-900 font-black text-sm">أقساط متساوية</p>
              <p className="text-xs text-slate-500 mt-0.5">بدون أي أرباح</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-xl p-3 shadow-sm">
            <Info size={16} className="text-blue-600 mt-0.5 shrink-0" />
            <p className="text-xs text-blue-800 font-medium leading-relaxed">
              هذه الحاسبة توضح نظام القرض الحسن المعتمد لدينا. ما تأخذه هو ما ترده بالضبط. قد تُطبق رسوم إدارية بسيطة ثابتة تدفع لمرة واحدة.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/966570856657?text=أريد الاستفسار عن القرض الحسن (بدون فوائد)"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-600/20 hover:shadow-green-500/30 hover:-translate-y-0.5"
          >
            <PhoneCall size={18} />
            <span>قدم طلب القرض الحسن الآن</span>
          </a>

          <a
            href="tel:0570856657"
            className="flex items-center justify-center gap-2 w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-all shadow-sm text-sm"
          >
            <span dir="ltr">📞 0570856657</span>
          </a>
        </div>
      </div>

      {/* ── Amortization Schedule ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
        <button
          onClick={() => setShowSchedule(!showSchedule)}
          className="flex items-center justify-between w-full bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 font-bold text-sm transition-all shadow-sm"
        >
          <span>جدول السداد (أول 12 شهراً)</span>
          {showSchedule ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
        </button>

        {showSchedule && (
          <div className="mt-3 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 py-3 text-slate-700 font-bold">الشهر</th>
                    <th className="px-4 py-3 text-slate-700 font-bold">القسط المدفوع</th>
                    <th className="px-4 py-3 text-slate-700 font-bold">الرصيد المتبقي</th>
                  </tr>
                </thead>
                <tbody>
                  {result.schedule.map((row, i) => (
                    <tr key={row.month} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-slate-700 font-medium">{row.month}</td>
                      <td className="px-4 py-3 text-green-600 font-bold">{fmt(row.payment)}</td>
                      <td className="px-4 py-3 text-slate-600 font-medium">{fmt(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ── Tips Section ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
        <h2 className="text-2xl font-black text-slate-900 mb-8 text-center relative inline-block left-1/2 -translate-x-1/2">
          💡 مميزات القرض الحسن من نجد السداد
          <div className="h-1 w-1/2 bg-saddad-gold mx-auto mt-2 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: "🛡️", title: "موافق للشريعة 100%", body: "تمويل خالي تماماً من الربا أو الفوائد المتراكمة. ما تقترضه هو ما تسدده بالهللة." },
            { icon: "🏢", title: "لجميع القطاعات", body: "متاح للموظفين الحكوميين وموظفي القطاع الخاص وفق ضوابط وشروط ميسرة." },
            { icon: "⏳", title: "فترة سداد مرنة", body: "تصل فترات السداد إلى 60 شهراً (5 سنوات) للتمويل الشخصي لتقليل العبء الشهري عليك." },
            { icon: "🔄", title: "إسقاط المديونية", body: "في حالة الوفاة أو العجز الكلي (لا سمح الله) تسقط المديونية المتبقية فوراً." },
            { icon: "🎯", title: "بدون كفيل غارم", body: "في معظم الحالات نكتفي بضمان الراتب دون الحاجة لإشغال أصدقائك أو أقاربك بطلب الكفالة." },
            { icon: "⏱️", title: "سرعة الإنجاز", body: "بفضل أنظمتنا المباشرة، تحصل على الموافقة والتمويل في وقت قياسي بمجرد اكتمال الشروط." },
          ].map(tip => (
            <div key={tip.title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4 bg-slate-50 w-14 h-14 flex items-center justify-center rounded-full border border-slate-100">{tip.icon}</div>
              <h3 className="text-slate-900 font-bold mb-2 text-base">{tip.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
