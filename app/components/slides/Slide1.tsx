'use client';

interface Slide1Props {
  language: 'en' | 'jp';
}

export default function Slide1({ language }: Slide1Props) {
  const content = {
    en: {
      title: "The Gap in Global Disaster Resilience",
      subtitle: "Japan's Strength Meets a Global Opportunity",
      authors: "Bakai, Leila, Doga, Gyujun",
      leftTitle: "Structural Resilience",
      leftSubtitle: "Japan's World-Leading Strength",
      leftItems: [
        "Earthquake-proof buildings",
        "Tsunami walls & barriers",
        "Advanced evacuation systems",
        "Disaster education in schools"
      ],
      rightTitle: "Psychosocial Recovery",
      rightSubtitle: "Global Best Practices",
      rightItems: [
        "Community mental health support",
        "Trauma-informed care",
        "Social capital building",
        "Long-term recovery programs"
      ],
      question: "What if we could combine both strengths into one global learning hub?"
    },
    jp: {
      title: "世界的な災害レジリエンスのギャップ",
      subtitle: "日本の強みが世界的な機会と出会う",
      authors: "Bakai, Leila, Doga, Gyujun",
      leftTitle: "構造的レジリエンス",
      leftSubtitle: "日本の世界をリードする強み",
      leftItems: [
        "耐震建築",
        "津波防潮堤",
        "高度な避難システム",
        "学校での防災教育"
      ],
      rightTitle: "心理社会的回復",
      rightSubtitle: "グローバルベストプラクティス",
      rightItems: [
        "コミュニティメンタルヘルスサポート",
        "トラウマインフォームドケア",
        "社会資本の構築",
        "長期回復プログラム"
      ],
      question: "両方の強みを1つのグローバル学習ハブに統合できたらどうだろうか？"
    }
  };

  const t = content[language];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-auto px-4 py-6 pt-20 md:overflow-hidden md:px-8 md:py-8 md:pt-8">
      <div className="w-full max-w-6xl py-2">
        <h1 className="mb-4 text-center font-serif text-2xl font-normal tracking-tight text-zinc-900 md:mb-6 md:text-5xl">
          {t.title}
        </h1>

        <p className="mb-6 text-center font-sans text-xs tracking-tight text-zinc-500 md:mb-8 md:text-sm">
          {t.authors}
        </p>

        <div className="mb-6 grid grid-cols-1 gap-6 md:mb-8 md:grid-cols-2 md:gap-8">
          {/* Left Column - Structural Resilience */}
          <div className="rounded-lg border border-blue-200 bg-blue-50/30 p-6 md:p-8">
            <h2 className="mb-2 font-serif text-xl font-semibold text-blue-600 md:text-2xl">{t.leftTitle}</h2>
            <p className="mb-4 font-sans text-xs text-blue-500 md:text-sm">{t.leftSubtitle}</p>
            <ul className="space-y-2 md:space-y-3">
              {t.leftItems.map((item, idx) => (
                <li key={idx} className="font-sans text-sm text-zinc-700 md:text-base">
                  <span className="mr-2 text-blue-400">•</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Psychosocial Recovery */}
          <div className="rounded-lg border border-blue-200 bg-blue-50/30 p-6 md:p-8">
            <h2 className="mb-2 font-serif text-xl font-semibold text-blue-600 md:text-2xl">{t.rightTitle}</h2>
            <p className="mb-4 font-sans text-xs text-blue-500 md:text-sm">{t.rightSubtitle}</p>
            <ul className="space-y-2 md:space-y-3">
              {t.rightItems.map((item, idx) => (
                <li key={idx} className="font-sans text-sm text-zinc-700 md:text-base">
                  <span className="mr-2 text-blue-400">•</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16 rounded-lg border-2 border-blue-400 bg-blue-500 p-5 text-center md:mb-0 md:p-6">
          <p className="font-serif text-base font-medium leading-relaxed text-white md:text-xl">
            {t.question}
          </p>
        </div>
      </div>
    </div>
  );
}
