'use client';

interface Slide6Props {
  language: 'en' | 'jp';
}

export default function Slide6({ language }: Slide6Props) {
  const content = {
    en: {
      title: "Making It Happen",
      subtitle: "Phased Implementation Strategy",
      phase1Title: "Phase 1: Foundation",
      phase1Items: [
        "Establish Steering Group (Kamaishi City, Iwate Prefecture, academic partners)",
        "Define governance, ethical standards, and funding channels",
        "Set up coordination center for visiting delegations",
        "Develop research protocols and evaluation framework"
      ],
      phase2Title: "Phase 2: Core Programs",
      phase2Items: [
        "Launch short-term fellowships for educators and practitioners",
        "Develop digital platform for disaster education resources",
        "Create mental health resource library",
        "Begin community-based exchange activities with local volunteers"
      ],
      phase3Title: "Phase 3: Evaluation & Scale",
      phase3Items: [
        "Implement comprehensive evaluation framework",
        "Publish research outcomes and case studies",
        "Create replicable toolkits for other regions",
        "Expand partnerships to new countries",
        "Secure long-term funding commitments"
      ]
    },
    jp: {
      title: "実現への道",
      subtitle: "段階的実施戦略",
      phase1Title: "フェーズ1：基盤",
      phase1Items: [
        "運営グループの設立（釜石市、岩手県、学術パートナー）",
        "ガバナンス、倫理基準、資金チャネルの定義",
        "訪問代表団のための調整センターの設置",
        "研究プロトコルと評価フレームワークの開発"
      ],
      phase2Title: "フェーズ2：コアプログラム",
      phase2Items: [
        "教育者と実践者のための短期フェローシップの開始",
        "災害教育リソースのためのデジタルプラットフォームの開発",
        "メンタルヘルスリソースライブラリの作成",
        "地元ボランティアとのコミュニティベースの交流活動の開始"
      ],
      phase3Title: "フェーズ3：評価とスケール",
      phase3Items: [
        "包括的評価フレームワークの実施",
        "研究成果とケーススタディの公開",
        "他地域のための再現可能なツールキットの作成",
        "新しい国へのパートナーシップの拡大",
        "長期的な資金コミットメントの確保"
      ]
    }
  };

  const t = content[language];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto px-4 py-4 md:overflow-hidden md:px-8 md:py-6">
      <div className="w-full max-w-6xl">
        <h1 className="mb-3 text-center font-serif text-2xl font-semibold tracking-tight text-zinc-900 md:mb-4 md:text-4xl">
          {t.title}
        </h1>
        <p className="mb-4 text-center font-sans text-sm tracking-tight text-slate-600 md:mb-6 md:text-base">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-4 md:p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                <span className="font-serif text-sm font-bold">1</span>
              </div>
              <h3 className="font-serif text-base font-semibold text-blue-700 md:text-lg">{t.phase1Title}</h3>
            </div>
            <ul className="space-y-1.5 font-sans text-[10px] leading-snug tracking-tight text-zinc-700 md:space-y-2 md:text-xs">
              {t.phase1Items.map((item, idx) => (
                <li key={idx}><span className="mr-1 text-blue-400 md:mr-1.5">•</span>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border-2 border-blue-400 bg-blue-100 p-4 md:p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                <span className="font-serif text-sm font-bold">2</span>
              </div>
              <h3 className="font-serif text-base font-semibold text-blue-800 md:text-lg">{t.phase2Title}</h3>
            </div>
            <ul className="space-y-1.5 font-sans text-[10px] leading-snug tracking-tight text-zinc-700 md:space-y-2 md:text-xs">
              {t.phase2Items.map((item, idx) => (
                <li key={idx}><span className="mr-1 text-blue-500 md:mr-1.5">•</span>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border-2 border-blue-500 bg-blue-200 p-4 md:p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white">
                <span className="font-serif text-sm font-bold">3</span>
              </div>
              <h3 className="font-serif text-base font-semibold text-blue-900 md:text-lg">{t.phase3Title}</h3>
            </div>
            <ul className="space-y-1.5 font-sans text-[10px] leading-snug tracking-tight text-zinc-700 md:space-y-2 md:text-xs">
              {t.phase3Items.map((item, idx) => (
                <li key={idx}><span className="mr-1 text-blue-600 md:mr-1.5">•</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 rounded-lg border border-blue-300 bg-blue-50/50 p-4 text-center md:mt-6">
          <p className="font-sans text-xs font-medium text-blue-800 md:text-sm">
            {language === 'en'
              ? "Timeline: 18-24 months for full implementation"
              : "タイムライン：完全実施まで18〜24ヶ月"}
          </p>
        </div>
      </div>
    </div>
  );
}
