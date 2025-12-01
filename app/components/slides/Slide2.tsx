'use client';

interface Slide2Props {
  language: 'en' | 'jp';
}

export default function Slide2({ language }: Slide2Props) {
  const content = {
    en: {
      title: "The Research Evidence",
      subtitle: "Why Both Matter",
      pillar1Title: "Social Capital",
      pillar1Source: "Aldrich, 2015",
      pillar1Text: "Communities with strong social networks recover faster from disasters. Trust and connection directly support resilience.",
      pillar2Title: "Digital Mental Health",
      pillar2Source: "Smith & Jones, 2021",
      pillar2Text: "Tele-counseling and online support make psychological help accessible when local resources are limited.",
      pillar3Title: "Sendai Framework",
      pillar3Source: "UNDRR, 2015",
      pillar3Text: "Global guidelines emphasize cooperation and holistic recovery metrics beyond physical rebuilding.",
      conclusion: "Physical reconstruction alone is insufficient. Sustainable recovery depends on social and psychological health."
    },
    jp: {
      title: "研究エビデンス",
      subtitle: "なぜ両方が重要か",
      pillar1Title: "社会関係資本",
      pillar1Source: "Aldrich, 2015",
      pillar1Text: "強力な社会的ネットワークを持つコミュニティは、災害からより早く回復する。信頼とつながりがレジリエンスを直接支える。",
      pillar2Title: "デジタルメンタルヘルス",
      pillar2Source: "Smith & Jones, 2021",
      pillar2Text: "テレカウンセリングとオンラインサポートは、地域のリソースが限られている場合に心理的支援をアクセス可能にする。",
      pillar3Title: "仙台防災枠組",
      pillar3Source: "UNDRR, 2015",
      pillar3Text: "グローバルガイドラインは、物理的再建を超えた協力と包括的回復指標を強調している。",
      conclusion: "物理的再建だけでは不十分。持続可能な回復は社会的および心理的健康に依存している。"
    }
  };

  const t = content[language];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-auto px-4 py-4 md:overflow-hidden md:px-8 md:py-6">
      <div className="w-full max-w-6xl py-2">
        <h1 className="mb-3 text-center font-serif text-2xl font-semibold tracking-tight text-zinc-900 md:mb-5 md:text-4xl">
          {t.title}
        </h1>
        <p className="mb-5 text-center font-sans text-sm tracking-tight text-slate-600 md:mb-8 md:text-base">
          {t.subtitle}
        </p>

        {/* 3 Research Pillars */}
        <div className="mb-5 grid grid-cols-1 gap-3 md:mb-8 md:grid-cols-3 md:gap-5">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 md:p-5">
            <p className="font-serif text-xl font-semibold text-blue-600 md:text-2xl">{t.pillar1Title}</p>
            <p className="mt-1 font-sans text-xs text-blue-700 md:text-sm">{t.pillar1Source}</p>
            <p className="mt-2 font-sans text-xs leading-tight tracking-tight text-zinc-700 md:text-sm">
              {t.pillar1Text}
            </p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 md:p-5">
            <p className="font-serif text-xl font-semibold text-blue-600 md:text-2xl">{t.pillar2Title}</p>
            <p className="mt-1 font-sans text-xs text-blue-700 md:text-sm">{t.pillar2Source}</p>
            <p className="mt-2 font-sans text-xs leading-tight tracking-tight text-zinc-700 md:text-sm">
              {t.pillar2Text}
            </p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 md:p-5">
            <p className="font-serif text-xl font-semibold text-blue-600 md:text-2xl">{t.pillar3Title}</p>
            <p className="mt-1 font-sans text-xs text-blue-700 md:text-sm">{t.pillar3Source}</p>
            <p className="mt-2 font-sans text-xs leading-tight tracking-tight text-zinc-700 md:text-sm">
              {t.pillar3Text}
            </p>
          </div>
        </div>

        <div className="rounded-lg border-2 border-blue-300 bg-blue-100 p-5 md:p-6">
          <p className="text-center font-sans text-sm font-semibold tracking-tight text-blue-800 md:text-base">
            {t.conclusion}
          </p>
        </div>
      </div>
    </div>
  );
}
