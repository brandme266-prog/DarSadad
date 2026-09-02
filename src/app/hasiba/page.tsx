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
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-28 pb-20">
      {/* ── Header ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-saddad-gold/10 border border-saddad-gold/20 rounded-full px-4 py-1.5 text-saddad-gold text-sm mb-5">
          <CheckCircle2 size={15} />
          <span>قرض حسن إسلامي 100%</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          حاسبة القرض الحسن
          <span className="block text-saddad-gold">بدون أي فوائد</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          تمويل إسلامي نقي (قرض حسن). ما تستعيره هو تماماً ما تسدده، بدون أي هوامش ربح أو فوائد مركبة.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* ── LEFT: Controls ── */}
        <div className="lg:col-span-3 space-y-6">
          {/* Loan Type Toggle */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <p className="text-slate-300 text-sm font-medium mb-4">نوع التمويل (قرض حسن)</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => { setLoanType("personal"); setMonths(Math.min(months, 60)); setAmount(Math.min(amount, 1000000)); }}
                className={`py-3 px-4 rounded-xl font-bold text-sm transition-all ${loanType === "personal" ? "bg-saddad-gold text-slate-950" : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"}`}
              >
                🏦 تمويل شخصي
              </button>
              <button
                onClick={() => { setLoanType("real-estate"); setMonths(Math.min(months > 60 ? months : 240)); }}
                className={`py-3 px-4 rounded-xl font-bold text-sm transition-all ${loanType === "real-estate" ? "bg-saddad-gold text-slate-950" : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"}`}
              >
                🏠 تمويل عقاري
              </button>
            </div>
          </div>

          {/* Amount Slider */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <label className="text-slate-300 text-sm font-medium">مبلغ التمويل</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={amount}
                  onChange={e => setAmount(Math.min(maxAmount, Math.max(10000, Number(e.target.value))))}
                  className="bg-slate-800 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm w-32 text-center focus:outline-none focus:border-saddad-gold"
                />
                <span className="text-slate-400 text-sm">ريال</span>
              </div>
            </div>
            <input
              type="range"
              min={10000}
              max={maxAmount}
              step={10000}
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-saddad-gold"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>10,000 ريال</span>
              <span>{fmt(maxAmount)} ريال</span>
            </div>
          </div>

          {/* Duration Slider */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <label className="text-slate-300 text-sm font-medium">مدة السداد</label>
              <span className="text-saddad-gold font-bold text-sm">{formatMonths(months)}</span>
            </div>
            <input
              type="range"
              min={6}
              max={maxMonths}
              step={6}
              value={months}
              onChange={e => setMonths(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-saddad-gold"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>6 أشهر</span>
              <span>{formatMonths(maxMonths)}</span>
            </div>

            {/* Quick duration picks */}
            <div className="mt-4 flex gap-2 flex-wrap">
              {(loanType === "real-estate" ? [60, 120, 180, 240, 300] : [12, 24, 36, 48, 60]).map(m => (
                <button
                  key={m}
                  onClick={() => setMonths(m)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${months === m ? "bg-saddad-gold text-slate-950 border-saddad-gold" : "border-white/10 text-slate-400 hover:border-saddad-gold/40"}`}
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
          <div className="bg-gradient-to-br from-saddad-gold to-yellow-500 rounded-2xl p-6 text-slate-950 shadow-2xl shadow-yellow-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay"></div>
            
            <p className="text-sm font-bold opacity-80 mb-1 relative z-10">القسط الشهري (بدون فوائد)</p>
            <p className="text-4xl font-black mb-1 leading-none relative z-10">
              {fmt(result.monthlyPayment)}
            </p>
            <p className="text-sm font-bold opacity-80 relative z-10">ريال سعودي</p>

            <div className="mt-5 pt-5 border-t border-slate-950/20 grid grid-cols-2 gap-3 relative z-10">
              <div>
                <p className="text-xs opacity-70 mb-0.5 font-medium">إجمالي المدفوع</p>
                <p className="font-bold text-sm">{fmt(result.totalPayment)} ر</p>
              </div>
              <div>
                <p className="text-xs opacity-70 mb-0.5 font-medium">إجمالي الفوائد</p>
                <p className="font-bold text-sm text-green-900 bg-green-400/30 inline-block px-2 rounded">0 ريال (صفر)</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Wallet size={14} className="text-saddad-gold" />
                <span className="text-xs text-slate-400">الراتب المطلوب</span>
              </div>
              <p className="text-white font-bold text-sm">{fmt(salaryNeeded)} ريال</p>
              <p className="text-xs text-slate-500 mt-0.5">بحد {loanType === "real-estate" ? "45%" : "33%"} استقطاع</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-green-500/30 rounded-xl p-4 bg-green-500/5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={14} className="text-green-400" />
                <span className="text-xs text-green-400">نسبة التكلفة</span>
              </div>
              <p className="text-white font-bold text-sm">
                0%
              </p>
              <p className="text-xs text-green-500/70 mt-0.5">قرض حسن 100%</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} className="text-saddad-gold" />
                <span className="text-xs text-slate-400">مدة السداد</span>
              </div>
              <p className="text-white font-bold text-sm">{formatMonths(months)}</p>
              <p className="text-xs text-slate-500 mt-0.5">{months} قسطاً شهرياً</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calculator size={14} className="text-saddad-gold" />
                <span className="text-xs text-slate-400">آلية السداد</span>
              </div>
              <p className="text-white font-bold text-sm">أقساط متساوية</p>
              <p className="text-xs text-slate-500 mt-0.5">بدون أي أرباح</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-2 bg-green-500/10 border border-green-500/20 rounded-xl p-3">
            <Info size={14} className="text-green-400 mt-0.5 shrink-0" />
            <p className="text-xs text-green-300 leading-relaxed">
              هذه الحاسبة توضح نظام القرض الحسن المعتمد لدينا. ما تأخذه هو ما ترده بالضبط بدون زيادة. قد تُطبق رسوم إدارية بسيطة ثابتة لا علاقة لها بنسبة التمويل.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/966570856657?text=أريد الاستفسار عن القرض الحسن (بدون فوائد)"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-0.5"
          >
            <PhoneCall size={18} />
            <span>قدم طلب القرض الحسن الآن</span>
          </a>

          <a
            href="tel:0570856657"
            className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-3 rounded-xl transition-all text-sm"
          >
            <span>📞 0570856657</span>
          </a>
        </div>
      </div>

      {/* ── Amortization Schedule ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
        <button
          onClick={() => setShowSchedule(!showSchedule)}
          className="flex items-center gap-2 w-full bg-white/5 hover:bg-white/8 border border-white/10 rounded-xl p-4 text-white font-medium text-sm transition-all"
        >
          {showSchedule ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          <span>جدول السداد (أول 12 شهراً)</span>
        </button>

        {showSchedule && (
          <div className="mt-3 bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="bg-saddad-gold/10 border-b border-white/10">
                    <th className="px-4 py-3 text-saddad-gold font-bold">الشهر</th>
                    <th className="px-4 py-3 text-saddad-gold font-bold">القسط المدفوع</th>
                    <th className="px-4 py-3 text-saddad-gold font-bold">الرصيد المتبقي</th>
                  </tr>
                </thead>
                <tbody>
                  {result.schedule.map((row, i) => (
                    <tr key={row.month} className={i % 2 === 0 ? "bg-white/2" : "bg-white/4"}>
                      <td className="px-4 py-2.5 text-slate-300">{row.month}</td>
                      <td className="px-4 py-2.5 text-green-400 font-medium">{fmt(row.payment)}</td>
                      <td className="px-4 py-2.5 text-slate-300">{fmt(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ── Tips Section ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          💡 مميزات القرض الحسن من نجد السداد
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "🛡️", title: "موافق للشريعة 100%", body: "تمويل خالي تماماً من الربا أو الفوائد المتراكمة. ما تقترضه هو ما تسدده بالهللة." },
            { icon: "🏢", title: "لجميع القطاعات", body: "متاح للموظفين الحكوميين وموظفي القطاع الخاص وفق ضوابط وشروط ميسرة." },
            { icon: "⏳", title: "فترة سداد مرنة", body: "تصل فترات السداد إلى 60 شهراً (5 سنوات) للتمويل الشخصي لتقليل العبء الشهري عليك." },
            { icon: "🔄", title: "إسقاط المديونية", body: "في حالة الوفاة أو العجز الكلي (لا سمح الله) تسقط المديونية المتبقية فوراً." },
            { icon: "🎯", title: "بدون كفيل غارم", body: "في معظم الحالات نكتفي بضمان الراتب دون الحاجة لإشغال أصدقائك أو أقاربك بطلب الكفالة." },
            { icon: "⏱️", title: "سرعة الإنجاز", body: "بفضل أنظمتنا المباشرة، تحصل على الموافقة والتمويل في وقت قياسي بمجرد اكتمال الشروط." },
          ].map(tip => (
            <div key={tip.title} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5">
              <div className="text-2xl mb-3">{tip.icon}</div>
              <h3 className="text-white font-bold mb-2 text-sm">{tip.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
