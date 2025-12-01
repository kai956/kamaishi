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
      rightTitle: "Psychosocial Recovery",
      rightSubtitle: "Global Best Practices",
      text1: "Japan excels at structural resilience — earthquake-proof buildings, tsunami walls, evacuation systems.",
      text2: "But research shows a critical gap: post-disaster mental health and psychosocial recovery receive less emphasis.",
      question: "What if we could combine both strengths into one global learning hub?"
    },
    jp: {
      title: "世界的な災害レジリエンスのギャップ",
      subtitle: "日本の強みが世界的な機会と出会う",
      authors: "Bakai, Leila, Doga, Gyujun",
      leftTitle: "構造的レジリエンス",
      leftSubtitle: "日本の世界をリードする強み",
      rightTitle: "心理社会的回復",
      rightSubtitle: "グローバルベストプラクティス",
      text1: "日本は構造的レジリエンスに優れている — 耐震建築、津波防潮堤、避難システム。",
      text2: "しかし、研究は重要なギャップを示している：災害後のメンタルヘルスと心理社会的回復はあまり重視されていない。",
      question: "両方の強みを1つのグローバル学習ハブに統合できたらどうだろうか？"
    }
  };

  const t = content[language];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-auto px-4 py-6 pt-32 md:pt-16 md:overflow-hidden md:px-8 md:py-8 md:pt-8">
      <div className="w-full max-w-6xl py-2">
        <h1 className="mb-4 text-center font-serif text-2xl font-normal tracking-tight text-zinc-900 md:mb-6 md:text-5xl">
          {t.title}
        </h1>

        <p className="mb-4 text-center font-sans text-xs tracking-tight text-zinc-500 md:mb-6 md:text-sm">
          {t.authors}
        </p>
        <div className="mb-4 grid grid-cols-1 gap-4 md:mb-6 md:grid-cols-2 md:gap-6">
          <div className="text-center">
            <div className="h-64 w-full rounded-lg bg-blue-100 md:h-120"></div>
            <div className="mt-3 space-y-1">
              <p className="font-serif text-2xl font-semibold text-blue-500">{t.leftTitle}</p>
              <p className="font-sans text-sm tracking-tight text-zinc-600">{t.leftSubtitle}</p>
            </div>
          </div>

          <div className="text-center">
            <div className="h-64 w-full rounded-lg bg-blue-200 md:h-120"></div>
            <div className="mt-3 space-y-1">
              <p className="font-serif text-2xl font-semibold text-blue-500">{t.rightTitle}</p>
              <p className="font-sans text-sm tracking-tight text-zinc-600">{t.rightSubtitle}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-center md:space-y-3 mb-16 md:mb-0">
          <p className="font-sans text-xs tracking-tight text-zinc-700 md:text-sm">
            {t.text1}
          </p>
          <p className="font-sans text-xs tracking-tight text-zinc-700 md:text-sm">
            {t.text2}
          </p>
          <p className="mt-3 pt-2 font-serif text-lg font-medium text-blue-600 md:mt-4 md:text-2xl">
            {t.question}
          </p>
        </div>
      </div>
    </div>
  );
}
