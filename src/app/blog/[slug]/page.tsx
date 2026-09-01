import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight, PhoneCall, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { articles } from "../page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) return { title: "المقال غير موجود" };
  const content = articleContents[slug];
  return {
    title: `${article.title} | نجد السداد للحلول المالية`,
    description: article.summary,
    keywords: content?.keywords ?? [],
    openGraph: { title: article.title, description: article.summary, images: [article.image] },
  };
}

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

// ===================== محتوى المقالات الكامل =====================
const articleContents: Record<string, {
  keywords: string[];
  intro: string;
  sections: {
    heading: string;
    body?: string;
    list?: string[];
    numberedList?: string[];
    table?: { headers: string[]; rows: string[][] };
    note?: string;
    warning?: string;
  }[];
}> = {

  // ==================== مقال 1: تمويل عقاري بدون دفعة أولى ====================
  "real-estate-financing-no-down-payment-riyadh": {
    keywords: ["تمويل عقاري بدون دفعة أولى الرياض", "شروط التمويل العقاري 2026", "تمويل فيلا بدون دفعة الرياض", "بنك الإسكان السعودي"],
    intro: "يُعدّ امتلاك المسكن حلماً يراوده كثير من السعوديين والمقيمين، وقد أسهمت المبادرات الحكومية وبرامج صندوق التنمية العقارية في جعل هذا الحلم أقرب للتحقق. في هذا المقال الشامل، نستعرض كل ما تحتاج معرفته للحصول على تمويل عقاري بدون دفعة أولى في الرياض لعام 2026.",
    sections: [
      {
        heading: "ما هو التمويل العقاري بدون دفعة أولى؟",
        body: "التمويل العقاري بدون دفعة أولى هو برنامج تمويلي يتيح للأفراد المؤهلين شراء عقار سكني دون الحاجة لدفع أي مبلغ مقدم من جيبهم، إذ تتحمل الجهة التمويلية 100% من قيمة العقار مقابل أقساط شهرية منتظمة. ويُتاح هذا النوع من التمويل عادةً للموظفين في الجهات الحكومية والشركات الكبرى التي تتمتع بملاءة مالية عالية.",
      },
      {
        heading: "الشروط الأساسية للحصول على تمويل عقاري بدون دفعة أولى في الرياض",
        numberedList: [
          "أن يكون المتقدم سعودي الجنسية أو مقيماً بإقامة نظامية سارية في المملكة.",
          "أن يكون عمر المتقدم بين 21 و65 سنة عند انتهاء فترة التمويل.",
          "أن يكون دخله الشهري الصافي لا يقل عن 5,000 ريال سعودي.",
          "ألا تتجاوز نسبة الاستقطاع الشهري 45% من صافي الراتب (أو 33% في بعض البنوك).",
          "أن يكون سجله الائتماني في سمة نظيفاً وخالياً من التعثرات والمتأخرات.",
          "أن يكون العقار المراد شراؤه مسجلاً في وزارة الشؤون البلدية والقروية.",
          "أن يكون العقار خالياً من أي رهونات أو قضايا قانونية معلقة.",
        ],
      },
      {
        heading: "مقارنة بين برامج التمويل العقاري بدون دفعة أولى",
        table: {
          headers: ["البرنامج", "الجهة", "الحد الأقصى", "فترة السداد", "هامش الربح", "الفئة المستهدفة"],
          rows: [
            ["صندوق التنمية العقارية", "حكومي", "500,000 ريال", "25 سنة", "0%", "مستحقو الدعم السكاني"],
            ["تمويل وافر", "بنك الرياض", "3,000,000 ريال", "25 سنة", "3.25%", "موظفو الحكومة"],
            ["تمويل الراجحي العقاري", "مصرف الراجحي", "2,500,000 ريال", "20 سنة", "3.49%", "جميع الموظفين"],
            ["تمويل الأهلي العقاري", "البنك الأهلي", "2,000,000 ريال", "25 سنة", "3.15%", "موظفو الحكومة"],
            ["نجد السداد للوساطة", "وسيط معتمد", "غير محدد", "حتى 25 سنة", "تنافسي", "جميع الفئات"],
          ],
        },
        note: "تختلف الشروط والهوامش تبعاً لتقييمك الائتماني وطبيعة عملك. يعمل فريق نجد السداد على انتقاء أفضل العروض المتاحة لملفك.",
      },
      {
        heading: "خطوات الحصول على التمويل العقاري بدون دفعة أولى",
        numberedList: [
          "تقديم طلب الدعم السكاني على منصة إيجار أو موقع وزارة الإسكان والتحقق من أهليتك.",
          "جمع المستندات المطلوبة: الهوية الوطنية، كشف الراتب الأخير 3 أشهر، عقد العمل، تقرير سمة.",
          "التواصل مع فريق نجد السداد للحصول على دراسة مجانية للملف وتحديد أفضل جهة تمويلية.",
          "تقديم طلب التمويل وانتظار الموافقة المبدئية (عادةً 3-7 أيام عمل).",
          "بعد الموافقة، اختيار العقار وإجراء التقييم العقاري الرسمي.",
          "توقيع عقد التمويل وإتمام إجراءات نقل الملكية في وزارة العدل.",
          "صرف مبلغ التمويل مباشرةً للبائع وبدء الاستمتاع بمنزلك الجديد.",
        ],
      },
      {
        heading: "المستندات المطلوبة للتمويل العقاري في الرياض",
        list: [
          "صورة الهوية الوطنية سارية المفعول (للمواطن) أو الإقامة (للمقيم)",
          "كشف حساب بنكي لآخر 6 أشهر",
          "خطاب راتب رسمي موثق من جهة العمل",
          "تقرير سمة الائتماني لا يتجاوز 30 يوماً",
          "صور صك ملكية العقار المراد شراؤه",
          "شهادة تقييم عقاري معتمدة من مقيّم معتمد",
          "عقد البيع الابتدائي موقع بين الطرفين",
        ],
      },
      {
        heading: "أكثر الأخطاء شيوعاً التي تُسبب رفض طلب التمويل العقاري",
        list: [
          "وجود تعثرات قائمة في سمة غير مسوّاة",
          "ارتفاع نسبة الاستقطاع الإجمالية فوق الحد المسموح به",
          "اختيار عقار بقيمة سوقية أعلى بكثير من القيمة التقديرية",
          "تقديم مستندات منتهية الصلاحية أو غير مكتملة",
          "عدم تحويل الراتب على حساب بنكي في الجهة التمويلية",
          "كثرة طلبات التمويل في فترة قصيرة مما يخفض التقييم الائتماني",
        ],
        warning: "إذا واجهت رفض طلب التمويل العقاري من بنك ما، لا تتسرع وتقدم لبنوك أخرى متعددة في نفس الوقت. هذا يُضعف تقييمك في سمة. تواصل مع نجد السداد أولاً لتشخيص سبب الرفض ووضع خطة تصحيحية.",
      },
      {
        heading: "هل يمكن تمويل الفلل والشقق في جميع أحياء الرياض؟",
        body: "نعم، يشمل التمويل العقاري بالرياض جميع الأحياء السكنية المخططة والمعتمدة من الجهات البلدية، ومن أبرزها: حي النرجس، الياسمين، الملقا، العقيق، القيروان، الصحافة، النخيل، المروج، قرطبة، الرابية، الربوة، العليا، الوادي، وغيرها من أحياء الرياض الحديثة والراقية.",
      },
    ],
  },

  // ==================== مقال 2: سداد التعثرات وتحسين سمة ====================
  "how-to-clear-simah-defaults-and-settle-loans": {
    keywords: ["سداد تعثرات سمة", "تحسين السجل الائتماني سمة", "إعادة جدولة قروض البنك", "تسوية ديون بنكية الرياض"],
    intro: "يُعاني كثير من الأفراد في المملكة من تراكم التعثرات البنكية وانخفاض تقييم سمة، مما يحول دون حصولهم على أي تمويل مستقبلي. في هذا الدليل الشامل، نشرح خطوة بخطوة كيف تستعيد وضعك الائتماني وتمسح التعثرات من سجلك نهائياً.",
    sections: [
      {
        heading: "ما هي سمة وكيف تؤثر على حياتك المالية؟",
        body: "سمة (شركة المعلومات الائتمانية) هي الجهة الرسمية المعتمدة في المملكة العربية السعودية لتجميع وتحليل البيانات الائتمانية لجميع الأفراد والشركات. يُعدّ تقرير سمة المرجع الأساسي الذي تعتمد عليه جميع البنوك وجهات التمويل لتقييم جدارتك الائتمانية ومنحك أو رفض طلب التمويل.",
      },
      {
        heading: "أسباب انخفاض التقييم الائتماني في سمة",
        numberedList: [
          "التأخر المتكرر في سداد الأقساط الشهرية لأكثر من 30 يوماً.",
          "التوقف الكلي عن السداد وتحويل الملف إلى الإدارة القانونية.",
          "كثرة طلبات الاستعلام الائتماني في فترة قصيرة (تدل على ضغط مالي).",
          "وجود شيكات مرتجعة أو أوامر تنفيذ قضائية مسجلة.",
          "استنفاد كامل حدود بطاقات الائتمان دون سداد.",
          "انتهاء عقود العمل وانقطاع مصدر الدخل.",
          "الضمانة لأشخاص تعثروا في السداد.",
        ],
      },
      {
        heading: "خطوات سداد التعثرات البنكية خطوة بخطوة",
        numberedList: [
          "اطلب تقرير سمة الخاص بك عبر موقع سمة الإلكتروني أو تطبيق توثيق.",
          "حدد جميع الجهات الدائنة والتعثرات المسجلة ضدك بدقة.",
          "تواصل مع فريق نجد السداد لدراسة حالتك وتقييم خياراتك المتاحة.",
          "تفاوض مع كل جهة دائنة على إعادة الجدولة أو التسوية بخصم.",
          "احصل على إخلاء الطرف الرسمي من كل جهة بعد إتمام السداد.",
          "قدّم طلباً رسمياً لسمة لتحديث بياناتك وإزالة التعثر من سجلك.",
          "انتظر مدة 30-60 يوم عمل لظهور التحديثات في تقرير سمة.",
        ],
      },
      {
        heading: "الفرق بين التسوية الكاملة وإعادة الجدولة",
        table: {
          headers: ["المعيار", "التسوية الكاملة", "إعادة الجدولة"],
          rows: [
            ["التعريف", "سداد كامل المبلغ المستحق دفعةً واحدة", "تمديد فترة السداد بأقساط أصغر"],
            ["الأثر على سمة", "إزالة التعثر فوراً بعد التحديث", "يظل التعثر حتى إتمام كل الأقساط"],
            ["الخصومات", "قد تُمنح خصومات على الغرامات", "لا خصومات عادةً على الأصل"],
            ["المناسب لـ", "من يملك سيولة كافية", "من يعاني من ضائقة مالية مؤقتة"],
            ["الوقت اللازم", "أسابيع قليلة", "شهور أو سنوات حسب الخطة"],
          ],
        },
      },
      {
        heading: "كيف تُحسّن تقييمك في سمة بعد سداد التعثرات؟",
        list: [
          "احرص على سداد أقساطك الجديدة في موعدها دون أي تأخير",
          "حافظ على استخدام بطاقة الائتمان بحد أقصى 30% من الحد المتاح",
          "لا تُغلق حسابات بنكية قديمة حتى لو كانت غير نشطة (تُعزز السجل)",
          "تجنب طلب تمويلات جديدة قبل مرور 6 أشهر على إتمام التسوية",
          "راجع تقرير سمة كل 3 أشهر للتحقق من الدقة وعدم وجود أخطاء",
          "تنوّع مصادر الالتزامات: بطاقة ائتمان + قرض شخصي يبني سجلاً أفضل",
        ],
      },
      {
        heading: "متى تحتاج لمساعدة متخصصين مثل نجد السداد؟",
        body: "تصبح الحاجة لمستشار مالي متخصص ضرورية في الحالات التالية: وجود تعثرات لدى أكثر من جهة دائنة في آنٍ واحد، تهديد بإحالة الملف للقضاء، وجود حجوزات على راتبك أو أصولك، أو إذا سبق رفض طلبك من أكثر من جهة تمويلية. يتولى فريق نجد السداد إدارة كل هذه التعقيدات نيابةً عنك بأعلى مستوى من الاحترافية.",
        warning: "تحذير: لا تتعامل مع أي جهة غير معتمدة تدّعي قدرتها على 'مسح سمة' مقابل مبالغ مالية. عمليات إزالة التعثرات قانونية ولا تُتم إلا بعد السداد الفعلي.",
      },
      {
        heading: "الوقت المتوقع لتحسين التقييم الائتماني في سمة",
        table: {
          headers: ["نوع التعثر", "مدة الإزالة من سمة بعد السداد", "التأثير على التقييم"],
          rows: [
            ["تأخر 30 يوماً أو أقل", "فور تحديث الجهة الدائنة", "ارتفاع طفيف"],
            ["تأخر 31-90 يوماً", "30-45 يوم عمل", "ارتفاع متوسط"],
            ["تأخر أكثر من 90 يوماً", "45-60 يوم عمل", "ارتفاع كبير بعد التحديث"],
            ["مديونية محولة للقانون", "60-90 يوم عمل + وثيقة إخلاء طرف", "ارتفاع جوهري"],
          ],
        },
      },
    ],
  },

  // ==================== مقال 3: تحصيل ديون الشركات ====================
  "corporate-debt-collection-solutions-saudi-arabia": {
    keywords: ["تحصيل ديون الشركات السعودية", "استرداد مستحقات تجارية", "شركة تحصيل ديون الرياض", "حماية التدفقات النقدية"],
    intro: "تُعدّ الديون التجارية المتعثرة من أكبر التحديات التي تواجه الشركات الصغيرة والمتوسطة في المملكة العربية السعودية، إذ تؤثر مباشرةً على التدفقات النقدية وقدرة الشركة على الاستمرار والنمو. في هذا المقال، نستعرض أفضل الأساليب القانونية لاسترداد مستحقاتك التجارية مع الحفاظ على علاقاتك مع العملاء.",
    sections: [
      {
        heading: "ما هو تحصيل الديون التجارية ولماذا هو ضروري؟",
        body: "تحصيل الديون التجارية هو منظومة متكاملة من الإجراءات القانونية والمالية والتفاوضية التي تهدف إلى استرداد المبالغ المستحقة من العملاء أو الشركاء الذين أخلّوا بالتزاماتهم المالية. وتشير الإحصاءات إلى أن الشركات التي تعتمد على متخصصين في تحصيل الديون تستعيد ما يزيد عن 75% من مستحقاتها المتعثرة مقارنةً بـ 30% فقط عند محاولة التحصيل الذاتي.",
      },
      {
        heading: "أنواع الديون التجارية التي يمكن تحصيلها",
        list: [
          "فواتير البيع الآجل والديون التجارية المتأخرة",
          "مستحقات عقود الخدمات والاستشارات",
          "إيجارات العقارات التجارية المتراكمة",
          "قيمة البضاعة المسلّمة والبضاعة غير المدفوعة",
          "رسوم المشاريع والمقاولات المنجزة",
          "مستحقات شراء الأسهم أو حصص الشراكة",
          "ديون بطاقات الائتمان التجارية والتسهيلات البنكية",
          "التأمينات والضمانات البنكية المستردة",
        ],
      },
      {
        heading: "مراحل عملية تحصيل الديون التجارية الاحترافية",
        numberedList: [
          "الاستلام والتقييم: استلام ملف الدين وتقييم قابليته للتحصيل ودراسة الوضع القانوني والمالي للمدين.",
          "التواصل الودي: إرسال تنبيهات ومطالبات مكتوبة رسمية مع توضيح العواقب القانونية.",
          "التفاوض والوساطة: التفاوض على جدول سداد مرن أو خصم جزء من الغرامات لتشجيع السداد.",
          "الإجراءات القانونية: رفع دعوى أمام المحاكم التجارية إذا فشلت المفاوضات الودية.",
          "التنفيذ القضائي: استصدار أوامر تنفيذ وتجميد أصول وحسابات المدين المُماطل.",
          "الاسترداد الفعلي: تحصيل المبلغ وتسليمه للدائن مع توثيق جميع الإجراءات رسمياً.",
        ],
      },
      {
        heading: "مقارنة بين التحصيل الذاتي والتحصيل بواسطة متخصصين",
        table: {
          headers: ["المعيار", "التحصيل الذاتي", "التحصيل عبر نجد السداد"],
          rows: [
            ["نسبة نجاح الاسترداد", "20-35%", "75-90%"],
            ["الوقت المستغرق", "6-24 شهراً", "2-6 أشهر"],
            ["التكلفة على الشركة", "موارد داخلية مستنزفة", "عمولة على المبالغ المحصّلة فقط"],
            ["الضغط على الموظفين", "عالٍ جداً", "لا يوجد"],
            ["العلاقات التجارية", "تتضرر في الغالب", "تُحفظ بشكل احترافي"],
            ["الإجراءات القانونية", "معقدة وتستلزم محامياً", "مشمولة في الخدمة"],
          ],
        },
        note: "يُفضّل الانتقال لمرحلة التحصيل الاحترافي فور تجاوز الدين 90 يوماً من تاريخ الاستحقاق.",
      },
      {
        heading: "كيف تحمي شركتك من تراكم الديون المعدومة مستقبلاً؟",
        list: [
          "اشترط الدفع المسبق أو دفعة عربون جادة قبل تسليم أي بضاعة أو خدمة",
          "ضع شروط دفع واضحة في العقود مع فائدة تأخيرية على المتأخرات",
          "قيّم الجدارة الائتمانية لعملائك الجدد قبل منحهم ائتماناً تجارياً",
          "تابع الذمم المدينة أسبوعياً وأرسل تنبيهات فور تجاوز 30 يوماً",
          "احتفظ بنسخ من جميع العقود والفواتير والمراسلات بشكل منظم",
          "أنشئ سياسة تحصيل مكتوبة داخل شركتك بخطوات واضحة",
        ],
      },
      {
        heading: "اللوائح القانونية لتحصيل الديون في المملكة العربية السعودية",
        body: "يخضع تحصيل الديون التجارية في المملكة العربية السعودية لمنظومة قانونية متكاملة تشمل: نظام المحاكم التجارية، نظام التنفيذ الصادر بالمرسوم الملكي، وأنظمة الإفلاس والتصفية لعام 1443هـ. يتولى فريق نجد السداد المتخصص التعامل مع جميع هذه الإجراءات بخبرة قانونية عالية لضمان حصول موكله على حقوقه كاملةً ضمن الأطر القانونية المعتمدة.",
      },
    ],
  },

  // ==================== مقال 4: تمويل شخصي للموظفين ====================
  "personal-financing-options-up-to-one-million-sar": {
    keywords: ["تمويل شخصي مليون ريال الرياض", "قرض شخصي للموظفين 2026", "أفضل تمويل شخصي السعودية", "برامج التمويل الشخصي للقطاع الحكومي"],
    intro: "يبحث الملايين من موظفي القطاعين الحكومي والخاص في المملكة العربية السعودية عن برامج تمويل شخصي تناسب احتياجاتهم سواء لشراء سيارة أو تجديد المنزل أو سداد التزامات قائمة. في هذا المقال نستعرض أفضل وأشمل برامج التمويل الشخصي المتاحة حتى مليون ريال لعام 2026.",
    sections: [
      {
        heading: "ما الذي يميز التمويل الشخصي في نجد السداد؟",
        list: [
          "نعمل مع أكثر من 12 بنكاً وجهة تمويلية معتمدة في السعودية",
          "نختار لك أفضل عرض يناسب ملفك الائتماني ووضعك الوظيفي",
          "نُسرّع إجراءات الموافقة للحصول على ردٍّ مبدئي خلال 24-48 ساعة",
          "نقدم لك مقارنة شفافة بين العروض المتاحة دون تحيز لجهة بعينها",
          "نتابع ملفك من لحظة تقديم الطلب حتى صرف المبلغ في حسابك",
        ],
      },
      {
        heading: "مقارنة شاملة بين برامج التمويل الشخصي للموظفين في الرياض 2026",
        table: {
          headers: ["البرنامج", "الجهة", "الحد الأقصى", "فترة السداد", "هامش الربح السنوي", "الشرط الرئيسي"],
          rows: [
            ["تمويل الموظفين الحكوميين", "بنك الرياض", "1,000,000 ريال", "5 سنوات", "من 3.99%", "موظف حكومي"],
            ["تمويل الأهلي الشخصي", "البنك الأهلي", "800,000 ريال", "5 سنوات", "من 4.25%", "موظف حكومي أو خاص"],
            ["تمويل الراجحي الشخصي", "مصرف الراجحي", "600,000 ريال", "4 سنوات", "من 4.49%", "تحويل الراتب"],
            ["تمويل إنجاز", "البنك السعودي الفرنسي", "750,000 ريال", "5 سنوات", "من 4.10%", "موظف حكومي"],
            ["التمويل الميسر", "بنك ساب", "500,000 ريال", "4 سنوات", "من 4.30%", "جميع الموظفين"],
          ],
        },
        note: "هوامش الربح تقريبية وتختلف حسب الملف الائتماني لكل عميل. يقوم فريقنا بالحصول على العرض الأمثل لملفك تحديداً.",
      },
      {
        heading: "شروط الحصول على تمويل شخصي بمليون ريال",
        numberedList: [
          "أن تكون موظفاً في الحكومة أو شركة كبرى مدرجة بالقائمة البيضاء للجهة التمويلية.",
          "أن يكون راتبك الشهري لا يقل عن 15,000 ريال (للتمويل حتى مليون).",
          "ألا تتجاوز نسبة الاستقطاع الإجمالية بعد التمويل 33% من الراتب.",
          "أن تكون قضيت في وظيفتك الحالية مدة لا تقل عن 6 أشهر.",
          "أن يكون سجلك في سمة نظيفاً وبدون تعثرات.",
          "تحويل الراتب على حساب الجهة التمويلية (شرط في معظم البنوك).",
          "ألا يقل العمر عن 21 سنة ولا يتجاوز 60 سنة عند انتهاء مدة التمويل.",
        ],
      },
      {
        heading: "التمويل الشخصي للقطاع الخاص: الشروط والمتطلبات",
        body: "يُتاح التمويل الشخصي لموظفي القطاع الخاص بشروط تختلف قليلاً عن الحكوميين، وأبرزها: أن تكون الشركة مسجلة في وزارة الموارد البشرية ومشتركة في التأمينات الاجتماعية (GOSI)، وأن لا يقل راتب الموظف عن 4,000 ريال شهرياً، مع توفر شهادة راتب تُثبت الاستمرارية الوظيفية. تعمل نجد السداد على تسهيل الحصول على هذا النوع من التمويل حتى لمن قوبلت طلباتهم بالرفض سابقاً.",
      },
      {
        heading: "كيف تحسب قسطك الشهري للتمويل الشخصي؟",
        table: {
          headers: ["مبلغ التمويل", "مدة السداد", "هامش الربح 4%", "القسط الشهري التقريبي", "إجمالي ما تدفعه"],
          rows: [
            ["100,000 ريال", "3 سنوات", "4%", "2,950 ريال", "106,200 ريال"],
            ["200,000 ريال", "4 سنوات", "4%", "4,525 ريال", "217,200 ريال"],
            ["500,000 ريال", "5 سنوات", "4%", "9,200 ريال", "552,000 ريال"],
            ["750,000 ريال", "5 سنوات", "4%", "13,800 ريال", "828,000 ريال"],
            ["1,000,000 ريال", "5 سنوات", "4%", "18,400 ريال", "1,104,000 ريال"],
          ],
        },
        note: "هذه أرقام تقريبية توضيحية. الأرقام الفعلية تعتمد على هامش الربح المحدد في عقدك مع الجهة التمويلية.",
      },
      {
        heading: "نصائح ذهبية لضمان الموافقة على طلب التمويل الشخصي",
        numberedList: [
          "اطلع على تقرير سمة قبل التقديم وتأكد من دقة البيانات وغياب التعثرات.",
          "حوّل راتبك على بنك الجهة التمويلية قبل تقديم الطلب إن أمكن.",
          "لا تقدم لأكثر من جهتين في نفس الوقت لتجنب خفض تقييمك الائتماني.",
          "تجنب التأخر في سداد أي قسط قائم خلال فترة دراسة طلبك الجديد.",
          "تواصل مع نجد السداد للحصول على استشارة مجانية قبل التقديم لأي بنك.",
        ],
      },
    ],
  },
};

// ===================== مكونات المحتوى =====================
function ContentSection({ section }: { section: typeof articleContents[string]["sections"][0] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 pt-6 border-t border-slate-100">{section.heading}</h2>
      {section.body && <p className="text-slate-600 font-light leading-loose">{section.body}</p>}
      {section.numberedList && (
        <ol className="space-y-3 mr-4">
          {section.numberedList.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-saddad-gold text-slate-950 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              <span className="text-slate-700 font-light leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      )}
      {section.list && (
        <ul className="space-y-2">
          {section.list.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-saddad-gold shrink-0 mt-1" />
              <span className="text-slate-700 font-light leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
      {section.table && (
        <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
          <table className="w-full text-sm text-right">
            <thead>
              <tr className="bg-slate-900 text-white">
                {section.table.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-bold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-4 py-3 font-light border-b border-slate-100 whitespace-nowrap ${ci === 0 ? "font-bold text-slate-800" : "text-slate-600"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.note && (
        <div className="bg-saddad-gold/10 border border-saddad-gold/20 rounded-xl p-4 flex items-start gap-3">
          <CheckCircle2 size={18} className="text-saddad-gold shrink-0 mt-0.5" />
          <p className="text-sm text-slate-700 font-light leading-relaxed">{section.note}</p>
        </div>
      )}
      {section.warning && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 font-light leading-relaxed">{section.warning}</p>
        </div>
      )}
    </div>
  );
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) notFound();

  const content = articleContents[slug];
  const relatedArticles = articles.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <article className="bg-white min-h-screen pt-32 pb-24">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-light">
          <Link href="/" className="hover:text-saddad-gold transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-saddad-gold transition-colors">المقالات</Link>
          <span>/</span>
          <span className="text-slate-600">{article!.category}</span>
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 text-right">
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 flex-wrap">
          <span className="bg-saddad-gold text-slate-950 font-bold px-3 py-1 rounded-full">{article!.category}</span>
          <span className="flex items-center gap-1"><Calendar size={13} /> {article!.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock size={13} /> وقت القراءة: {article!.readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">{article!.title}</h1>
        <p className="text-lg text-slate-500 font-light leading-relaxed border-r-4 border-saddad-gold pr-4">{article!.summary}</p>
      </header>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative h-72 sm:h-96 md:h-[420px] w-full rounded-3xl overflow-hidden shadow-lg">
          <Image src={article!.image} alt={article!.title} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 850px" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
        </div>
      </div>

      {/* Table of Contents */}
      {content && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-10">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-saddad-gold rounded-full inline-block"></span>
              محتويات المقال
            </h3>
            <ol className="space-y-2">
              {content.sections.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-slate-600 hover:text-saddad-gold transition-colors">
                  <span className="text-saddad-gold font-bold">{i + 1}.</span>
                  <span>{s.heading}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-right space-y-10">
        {content ? (
          <>
            <p className="text-lg text-slate-600 font-light leading-loose bg-slate-50 p-6 rounded-2xl border border-slate-100">
              {content.intro}
            </p>
            {content.sections.map((section, i) => (
              <ContentSection key={i} section={section} />
            ))}
          </>
        ) : (
          <p className="text-slate-500 font-light">جاري إضافة المحتوى...</p>
        )}

        {/* CTA Card */}
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl my-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-saddad-gold/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saddad-gold/20 text-saddad-gold text-xs font-bold">
              استشارة مجانية 100%
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">هل لديك تساؤل حول هذا الموضوع؟</h3>
            <p className="text-slate-300 text-sm font-light max-w-md mx-auto leading-relaxed">
              مستشارونا الماليون في نجد السداد متاحون الآن للرد على كافة استفساراتك وتقديم دراسة شاملة ومجانية لحالتك.
            </p>
            <a href="https://wa.me/966570856657" className="bg-saddad-gold text-slate-950 px-8 py-4 rounded-xl font-bold text-sm hover:bg-saddad-gold-light transition-all inline-flex items-center gap-2 shadow-lg">
              <PhoneCall size={18} />
              <span>تواصل معنا عبر واتساب الآن</span>
            </a>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
        <h2 className="text-xl font-bold text-slate-900 mb-6 text-right">مقالات ذات صلة قد تهمك</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {relatedArticles.map((a, i) => (
            <Link key={i} href={`/blog/${a.slug}`} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-saddad-gold/30 hover:shadow-lg transition-all block">
              <div className="relative h-40 w-full overflow-hidden">
                <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="300px" />
              </div>
              <div className="p-4 text-right">
                <span className="text-[10px] bg-saddad-gold/15 text-slate-800 font-bold px-2 py-0.5 rounded-full">{a.category}</span>
                <h3 className="font-bold text-slate-800 text-sm mt-2 leading-snug group-hover:text-saddad-gold transition-colors line-clamp-2">{a.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 text-center">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-saddad-gold text-sm font-medium transition-colors border border-slate-200 px-6 py-3 rounded-xl hover:border-saddad-gold">
          <ArrowRight size={16} />
          <span>العودة لقائمة المقالات</span>
        </Link>
      </div>
    </article>
  );
}
