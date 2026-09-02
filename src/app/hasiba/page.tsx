"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  Calculator,
  PhoneCall,
  CheckCircle2,
  TrendingUp,
  Wallet,
  Clock,
  ChevronDown,
  ChevronUp,
  Info,
} from "lucide-react";

// ===================== Types =====================
interface CalcResult {
  monthlyPayment: number;
  totalPayment: number;
  totalProfit: number;
  profitRate: number;
  schedule: { month: number; payment: number; principal: number; profit: number; balance: number }[];
}

// ===================== Calculator Logic =====================
function calculateFinancing(
  principal: number,
  annualRate: number,
  months: number
): CalcResult {
  const monthlyRate = annualRate / 100 / 12;
  let monthlyPayment: number;

  if (monthlyRate === 0) {
    monthlyPayment = principal / months;
  } else {
    monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
  }

  const totalPayment = monthlyPayment * months;
  const totalProfit = totalPayment - principal;

  // Build amortization schedule (first 12 months only for display)
  const schedule = [];
  let balance = principal;
  for (let month = 1; month <= Math.min(months, 12); month++) {
    const profitForMonth = balance * monthlyRate;
    const principalForMonth = monthlyPayment - profitForMonth;
    balance -= principalForMonth;
    schedule.push({
      month,
      payment: monthlyPayment,
      principal: principalForMonth,
      profit: profitForMonth,
      balance: Math.max(0, balance),
    });
  }

  return { monthlyPayment, totalPayment, totalProfit, profitRate: annualRate, schedule };
}

function fmt(n: number) {
  return n.toLocaleString("ar-SA", { maximumFractionDigits: 0 });
}

// ===================== Main Page =====================
export default function CalculatorPage() {
  const [amount, setAmount] = useState(200000);
  const [rate, setRate] = useState(6);
  const [months, setMonths] = useState(60);
  const [showSchedule, setShowSchedule] = useState(false);
  const [loanType, setLoanType] = useState<"personal" | "real-estate">("personal");

  const result = calculateFinancing(amount, rate, months);
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
          <Calculator size={15} />
          <span>حاسبة التمويل الذكية</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          احسب قسطك الشهري
          <span className="block text-saddad-gold">في ثوانٍ</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          أداة احترافية تُساعدك على معرفة قسطك الشهري المتوقع وإجمالي هامش الربح قبل التواصل مع أي جهة تمويل
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* ── LEFT: Controls ── */}
        <div className="lg:col-span-3 space-y-6">
          {/* Loan Type Toggle */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <p className="text-slate-300 text-sm font-medium mb-4">نوع التمويل</p>
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

          {/* Rate Slider */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <label className="text-slate-300 text-sm font-medium">هامش الربح السنوي</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={rate}
                  step={0.1}
                  min={1}
                  max={22}
                  onChange={e => setRate(Math.min(22, Math.max(1, Number(e.target.value))))}
                  className="bg-slate-800 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm w-20 text-center focus:outline-none focus:border-saddad-gold"
                />
                <span className="text-slate-400 text-sm">%</span>
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={22}
              step={0.25}
              value={rate}
              onChange={e => setRate(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-saddad-gold"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>1%</span>
              <span className="text-green-400">أقل = أفضل</span>
              <span>22%</span>
            </div>

            {/* Rate Guide */}
            <div className="mt-4 flex gap-2 flex-wrap">
              {[
                { label: "حكومي ممتاز", val: 5.5, color: "green" },
                { label: "حكومي عادي", val: 6.5, color: "blue" },
                { label: "قطاع خاص", val: 8, color: "yellow" },
                { label: "مهن حرة", val: 10, color: "orange" },
              ].map(({ label, val, color }) => (
                <button
                  key={label}
                  onClick={() => setRate(val)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${rate === val ? "bg-saddad-gold text-slate-950 border-saddad-gold" : "border-white/10 text-slate-400 hover:border-saddad-gold/40"}`}
                >
                  {label} ({val}%)
                </button>
              ))}
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
          <div className="bg-gradient-to-br from-saddad-gold to-yellow-500 rounded-2xl p-6 text-slate-950 shadow-2xl shadow-yellow-500/20">
            <p className="text-sm font-medium opacity-70 mb-1">القسط الشهري</p>
            <p className="text-4xl font-black mb-1 leading-none">
              {fmt(result.monthlyPayment)}
            </p>
            <p className="text-sm font-medium opacity-70">ريال سعودي</p>

            <div className="mt-5 pt-5 border-t border-slate-950/20 grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs opacity-60 mb-0.5">إجمالي المدفوع</p>
                <p className="font-bold text-sm">{fmt(result.totalPayment)} ر</p>
              </div>
              <div>
                <p className="text-xs opacity-60 mb-0.5">إجمالي الربح</p>
                <p className="font-bold text-sm">{fmt(result.totalProfit)} ر</p>
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
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={14} className="text-saddad-gold" />
                <span className="text-xs text-slate-400">نسبة التكلفة</span>
              </div>
              <p className="text-white font-bold text-sm">
                {((result.totalProfit / amount) * 100).toFixed(1)}%
              </p>
              <p className="text-xs text-slate-500 mt-0.5">من أصل التمويل</p>
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
                <span className="text-xs text-slate-400">هامش الربح</span>
              </div>
              <p className="text-white font-bold text-sm">{rate}%</p>
              <p className="text-xs text-slate-500 mt-0.5">سنوياً (APR)</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-2 bg-blue-500/10 border border-blue-500/20 rounded-xl p-3">
            <Info size={14} className="text-blue-400 mt-0.5 shrink-0" />
            <p className="text-xs text-blue-300 leading-relaxed">
              هذه الحاسبة تُعطي تقديراً استرشادياً. القسط الفعلي يعتمد على تقييم سمة، جهة العمل، وشروط الجهة المانحة.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/966570856657?text=أريد الاستفسار عن تمويل شخصي"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-0.5"
          >
            <PhoneCall size={18} />
            <span>تواصل معنا للحصول على التمويل</span>
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
          <span>جدول السداد التفصيلي (أول 12 شهراً)</span>
        </button>

        {showSchedule && (
          <div className="mt-3 bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="bg-saddad-gold/10 border-b border-white/10">
                    <th className="px-4 py-3 text-saddad-gold font-bold">الشهر</th>
                    <th className="px-4 py-3 text-saddad-gold font-bold">القسط</th>
                    <th className="px-4 py-3 text-saddad-gold font-bold">الأصل</th>
                    <th className="px-4 py-3 text-saddad-gold font-bold">الربح</th>
                    <th className="px-4 py-3 text-saddad-gold font-bold">الرصيد المتبقي</th>
                  </tr>
                </thead>
                <tbody>
                  {result.schedule.map((row, i) => (
                    <tr key={row.month} className={i % 2 === 0 ? "bg-white/2" : "bg-white/4"}>
                      <td className="px-4 py-2.5 text-slate-300">{row.month}</td>
                      <td className="px-4 py-2.5 text-white font-medium">{fmt(row.payment)}</td>
                      <td className="px-4 py-2.5 text-green-400">{fmt(row.principal)}</td>
                      <td className="px-4 py-2.5 text-amber-400">{fmt(row.profit)}</td>
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
          💡 نصائح للحصول على أقل قسط ممكن
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "📊", title: "حسّن تقييم سمة", body: "كلما ارتفع تقييمك ائتمانياً، حصلت على هامش ربح أقل وقسط أصغر. استشرنا لتحسين سجلك قبل التقديم." },
            { icon: "🏢", title: "استفد من جهتك", body: "الموظف الحكومي يستفيد من نسبة استقطاع 45% بدل 33%، مما يعني قدرة على قسط أعلى وبالتالي تمويل أكبر." },
            { icon: "⏳", title: "أطل مدة السداد", body: "مدة سداد أطول = قسط شهري أقل، لكن تكلفة كلية أعلى. وازن بين ما يناسب ميزانيتك الشهرية وما توفره كلياً." },
            { icon: "🔄", title: "فكّر في شراء المديونية", body: "إذا كان لديك قرض قائم، قد تحصل على قرض أكبر وبقسط أقل عبر برنامج شراء المديونية من بنك آخر." },
            { icon: "🎯", title: "قدّم عبر وسيط", body: "نجد السداد تُفاوض بالنيابة عنك مع عشرات الجهات لضمان أقل هامش وأسرع موافقة في أول محاولة." },
            { icon: "📅", title: "اختر التوقيت الصحيح", body: "التقديم في نهاية الربع المالي أو في المناسبات الوطنية قد يُتيح الاستفادة من عروض موسمية بهوامش مخفضة." },
          ].map(tip => (
            <div key={tip.title} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5">
              <div className="text-2xl mb-3">{tip.icon}</div>
              <h3 className="text-white font-bold mb-2 text-sm">{tip.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
        <div className="bg-gradient-to-r from-saddad-gold/20 via-saddad-gold/10 to-transparent border border-saddad-gold/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">جاهز للحصول على تمويلك؟</h3>
            <p className="text-slate-400 text-sm">فريق نجد السداد يُحوّل أرقام الحاسبة إلى واقع ملموس بأفضل الشروط</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://wa.me/966570856657?text=أريد الاستفسار عن تمويل شخصي"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-saddad-gold hover:bg-yellow-400 text-slate-950 font-bold px-5 py-3 rounded-xl transition-all text-sm"
            >
              <PhoneCall size={16} />
              تواصل الآن
            </a>
            <Link
              href="/tamweel-shakhsi"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-5 py-3 rounded-xl transition-all text-sm"
            >
              معرفة المزيد
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
