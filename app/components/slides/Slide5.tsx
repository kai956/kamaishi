'use client';

interface Slide5Props {
  language: 'en' | 'jp';
}

export default function Slide5({ language }: Slide5Props) {
  const content = {
    en: {
      title: "How the Hub Works",
      subtitle: "A Self-Reinforcing Cycle",
      step1Title: "1. Knowledge Exchange",
      step1Items: [
        "Experts and community leaders visit Kamaishi",
        "Learn disaster education and evacuation systems",
        "Study long-term reconstruction planning"
      ],
      step2Title: "2. Program Design",
      step2Items: [
        "Co-create disaster preparedness workshops",
        "Develop culturally appropriate mental health activities",
        "Design school-based drill programs"
      ],
      step3Title: "3. Community Bonding",
      step3Items: [
        "Strengthen trust and social connections",
        "Build emotional safety networks",
        "Improve risk understanding and emergency behavior"
      ],
      step4Title: "4. Measurable Outcomes",
      step4Items: [
        "Better evacuation knowledge",
        "Improved preparedness skills",
        "Accessible mental health support"
      ],
      step5Title: "5. Scaling & Evidence",
      step5Items: [
        "Generate data and case studies",
        "Create replicable toolkits",
        "Attract new partners and funding"
      ]
    },
    jp: {
      title: "ハブの仕組み",
      subtitle: "自己強化サイクル",
      step1Title: "1. 知識交換",
      step1Items: [
        "専門家とコミュニティリーダーが釜石を訪問",
        "災害教育と避難システムを学ぶ",
        "長期復興計画を研究"
      ],
      step2Title: "2. プログラム設計",
      step2Items: [
        "災害準備ワークショップを共同作成",
        "文化的に適切なメンタルヘルス活動を開発",
        "学校ベースの訓練プログラムを設計"
      ],
      step3Title: "3. コミュニティの絆",
      step3Items: [
        "信頼と社会的つながりを強化",
        "感情的安全ネットワークを構築",
        "リスク理解と緊急行動を改善"
      ],
      step4Title: "4. 測定可能な成果",
      step4Items: [
        "より良い避難知識",
        "改善された準備スキル",
        "アクセス可能なメンタルヘルスサポート"
      ],
      step5Title: "5. スケーリングとエビデンス",
      step5Items: [
        "データとケーススタディを生成",
        "再現可能なツールキットを作成",
        "新しいパートナーと資金を引き付ける"
      ]
    }
  };

  const t = content[language];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto px-4 py-4 md:overflow-hidden md:px-8 md:py-6">
      <div className="w-full max-w-5xl">
        <h1 className="mb-2 text-center font-serif text-2xl font-semibold tracking-tight text-zinc-900 md:mb-3 md:text-4xl">
          {t.title}
        </h1>
        <p className="mb-4 text-center font-sans text-sm tracking-tight text-slate-600 md:mb-6 md:text-base">
          {t.subtitle}
        </p>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-2 md:gap-3">
          {/* Step 1 */}
          <div className="relative w-full">
            <div className="rounded-lg border-2 border-blue-300 bg-blue-100 p-3 md:p-4">
              <h2 className="mb-1.5 text-center font-serif text-sm font-semibold text-blue-700 md:mb-2 md:text-base">
                {t.step1Title}
              </h2>
              <ul className="space-y-0.5 text-center font-sans text-[10px] leading-snug tracking-tight text-zinc-800 md:space-y-1 md:text-xs">
                {t.step1Items.map((item, idx) => (
                  <li key={idx}><span className="mr-1 text-blue-500 md:mr-1.5">•</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mx-auto flex w-8 justify-center py-0.5 md:py-1">
              <div className="h-3 w-0.5 bg-blue-400 md:h-4"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative w-11/12">
            <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-3 md:p-4">
              <h2 className="mb-1.5 text-center font-serif text-sm font-semibold text-blue-700 md:mb-2 md:text-base">
                {t.step2Title}
              </h2>
              <ul className="space-y-0.5 text-center font-sans text-[10px] leading-snug tracking-tight text-zinc-800 md:space-y-1 md:text-xs">
                {t.step2Items.map((item, idx) => (
                  <li key={idx}><span className="mr-1 text-blue-500 md:mr-1.5">•</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mx-auto flex w-8 justify-center py-0.5 md:py-1">
              <div className="h-3 w-0.5 bg-blue-400 md:h-4"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative w-10/12">
            <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-3 md:p-4">
              <h2 className="mb-1.5 text-center font-serif text-sm font-semibold text-blue-700 md:mb-2 md:text-base">
                {t.step3Title}
              </h2>
              <ul className="space-y-0.5 text-center font-sans text-[10px] leading-snug tracking-tight text-zinc-800 md:space-y-1 md:text-xs">
                {t.step3Items.map((item, idx) => (
                  <li key={idx}><span className="mr-1 text-blue-500 md:mr-1.5">•</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mx-auto flex w-8 justify-center py-0.5 md:py-1">
              <div className="h-3 w-0.5 bg-blue-400 md:h-4"></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative w-9/12">
            <div className="rounded-lg border-2 border-blue-400 bg-blue-100 p-3 md:p-4">
              <h2 className="mb-1.5 text-center font-serif text-sm font-semibold text-blue-800 md:mb-2 md:text-base">
                {t.step4Title}
              </h2>
              <ul className="space-y-0.5 text-center font-sans text-[10px] leading-snug tracking-tight text-zinc-800 md:space-y-1 md:text-xs">
                {t.step4Items.map((item, idx) => (
                  <li key={idx}><span className="mr-1 text-blue-600 md:mr-1.5">•</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mx-auto flex w-8 justify-center py-0.5 md:py-1">
              <div className="h-3 w-0.5 bg-blue-400 md:h-4"></div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative w-8/12">
            <div className="rounded-lg border-2 border-blue-500 bg-blue-200 p-3 md:p-4">
              <h2 className="mb-1.5 text-center font-serif text-sm font-semibold text-blue-900 md:mb-2 md:text-base">
                {t.step5Title}
              </h2>
              <ul className="space-y-0.5 text-center font-sans text-[10px] leading-snug tracking-tight text-zinc-800 md:space-y-1 md:text-xs">
                {t.step5Items.map((item, idx) => (
                  <li key={idx}><span className="mr-1 text-blue-700 md:mr-1.5">•</span>{item}</li>
                ))}
              </ul>
            </div>
            {/* Arrow back to top indicating cycle */}
            <div className="mt-2 text-center">
              <span className="font-sans text-xs text-blue-600 md:text-sm">↻ Continuous Cycle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
