'use client';

interface Slide7Props {
  language: 'en' | 'jp';
}

export default function Slide7({ language }: Slide7Props) {
  const content = {
    en: {
      title: "Measuring Success",
      subtitle: "Evidence-Based Evaluation Framework",
      quantTitle: "Quantitative Metrics",
      quantItems: [
        "Training participation rates",
        "Preparedness assessment scores",
        "Disaster drill performance",
        "Mental health service utilization",
        "Digital platform usage statistics"
      ],
      qualTitle: "Qualitative Metrics",
      qualItems: [
        "Community trust interviews",
        "Focus groups on perceived support",
        "Ethnographic observation",
        "Social cohesion assessments",
        "Recovery trajectory analysis"
      ],
      conclusion: "Grounded in research. Measured for impact. Scaled through evidence."
    },
    jp: {
      title: "成功の測定",
      subtitle: "エビデンスに基づく評価フレームワーク",
      quantTitle: "定量的指標",
      quantItems: [
        "トレーニング参加率",
        "準備評価スコア",
        "防災訓練パフォーマンス",
        "メンタルヘルスサービス利用",
        "デジタルプラットフォーム使用統計"
      ],
      qualTitle: "定性的指標",
      qualItems: [
        "コミュニティ信頼インタビュー",
        "認識されたサポートに関するフォーカスグループ",
        "民族誌的観察",
        "社会的結束評価",
        "回復軌道分析"
      ],
      conclusion: "研究に基づく。影響のために測定。エビデンスを通じてスケール。"
    }
  };

  const t = content[language];

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Background color instead of image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>

      {/* Blurred Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-8 md:px-8">
        <div className="w-full max-w-5xl text-center">
          <h1 className="mb-4 font-serif text-3xl font-semibold tracking-tight text-white drop-shadow-lg md:mb-6 md:text-5xl">
            {t.title}
          </h1>
          <p className="mb-6 font-sans text-base tracking-tight text-white/90 drop-shadow-md md:mb-8 md:text-lg">
            {t.subtitle}
          </p>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {/* Quantitative Metrics */}
            <div className="rounded-xl border border-white/30 bg-white/95 p-5 shadow-2xl backdrop-blur-sm md:p-6">
              <h2 className="mb-3 font-serif text-lg font-semibold text-blue-700 md:mb-4 md:text-xl">
                {t.quantTitle}
              </h2>
              <ul className="space-y-1.5 text-left font-sans text-xs leading-snug tracking-tight text-zinc-800 md:space-y-2 md:text-sm">
                {t.quantItems.map((item, idx) => (
                  <li key={idx}><span className="mr-1.5 text-blue-500 md:mr-2">•</span>{item}</li>
                ))}
              </ul>
            </div>

            {/* Qualitative Metrics */}
            <div className="rounded-xl border border-white/30 bg-white/95 p-5 shadow-2xl backdrop-blur-sm md:p-6">
              <h2 className="mb-3 font-serif text-lg font-semibold text-blue-700 md:mb-4 md:text-xl">
                {t.qualTitle}
              </h2>
              <ul className="space-y-1.5 text-left font-sans text-xs leading-snug tracking-tight text-zinc-800 md:space-y-2 md:text-sm">
                {t.qualItems.map((item, idx) => (
                  <li key={idx}><span className="mr-1.5 text-blue-500 md:mr-2">•</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/40 bg-blue-600/90 p-4 shadow-2xl backdrop-blur-sm md:mt-8 md:p-5">
            <p className="font-sans text-sm font-semibold tracking-tight text-white md:text-base">
              {t.conclusion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
