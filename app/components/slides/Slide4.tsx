'use client';

interface Slide4Props {
    language: 'en' | 'jp';
}

export default function Slide4({ language }: Slide4Props) {
    const content = {
        en: {
            title: "The Kamaishi Global Resilience Hub",
            subtitle: "A Two-Way Knowledge Exchange",
            pillar1Title: "Japan Shares",
            pillar1Items: [
                "Structural resilience expertise",
                "Advanced evacuation systems",
                "School-based disaster drills",
                "Reconstruction planning"
            ],
            pillar2Title: "Partners Share",
            pillar2Items: [
                "Psychosocial recovery programs",
                "Trauma-informed care",
                "Community mental health support",
                "Culturally-adapted interventions"
            ],
            pillar3Title: "Together We Build",
            pillar3Items: [
                "Integrated resilience programs",
                "Research-driven outcomes",
                "Scalable toolkits",
                "Global best practices"
            ],
            conclusion: "Not one-way teaching. ",
            conclusionBold: "Mutual learning",
            conclusionEnd: " for stronger global resilience."
        },
        jp: {
            title: "釜石グローバルレジリエンスハブ",
            subtitle: "双方向の知識交換",
            pillar1Title: "日本が共有",
            pillar1Items: [
                "構造的レジリエンスの専門知識",
                "高度な避難システム",
                "学校ベースの防災訓練",
                "復興計画"
            ],
            pillar2Title: "パートナーが共有",
            pillar2Items: [
                "心理社会的回復プログラム",
                "トラウマインフォームドケア",
                "コミュニティメンタルヘルスサポート",
                "文化的に適応された介入"
            ],
            pillar3Title: "共に構築",
            pillar3Items: [
                "統合レジリエンスプログラム",
                "研究主導の成果",
                "スケーラブルなツールキット",
                "グローバルベストプラクティス"
            ],
            conclusion: "一方的な教育ではない。",
            conclusionBold: "相互学習",
            conclusionEnd: "でより強力なグローバルレジリエンスを。"
        }
    };

    const t = content[language];

    return (
        <div className="flex h-full w-full items-center justify-center overflow-y-auto px-4 py-4 md:overflow-hidden md:px-8 md:py-6">
            <div className="w-full max-w-6xl py-2">
                <h1 className="mb-2 text-center font-serif text-xl font-semibold tracking-tight text-zinc-900 md:mb-4 md:text-4xl">
                    {t.title}
                </h1>
                <p className="mb-4 text-center font-sans text-xs tracking-tight text-slate-600 md:mb-6 md:text-base">
                    {t.subtitle}
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                    {/* Pillar 1 */}
                    <div className="rounded-lg border border-blue-200 bg-blue-50/30 p-5 md:p-6">
                        <h2 className="mb-3 text-center font-serif text-base font-semibold text-blue-600 md:text-lg">{t.pillar1Title}</h2>
                        <ul className="space-y-2">
                            {t.pillar1Items.map((item, idx) => (
                                <li key={idx} className="font-sans text-xs leading-tight tracking-tight text-zinc-700 md:text-sm">
                                    <span className="mr-1.5 text-blue-400">•</span>{item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pillar 2 */}
                    <div className="rounded-lg border border-blue-200 bg-blue-50/30 p-5 md:p-6">
                        <h2 className="mb-3 text-center font-serif text-base font-semibold text-blue-600 md:text-lg">{t.pillar2Title}</h2>
                        <ul className="space-y-2">
                            {t.pillar2Items.map((item, idx) => (
                                <li key={idx} className="font-sans text-xs leading-tight tracking-tight text-zinc-700 md:text-sm">
                                    <span className="mr-1.5 text-blue-400">•</span>{item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pillar 3 */}
                    <div className="rounded-lg border border-blue-200 bg-blue-50/30 p-5 md:p-6">
                        <h2 className="mb-3 text-center font-serif text-base font-semibold text-blue-600 md:text-lg">{t.pillar3Title}</h2>
                        <ul className="space-y-2">
                            {t.pillar3Items.map((item, idx) => (
                                <li key={idx} className="font-sans text-xs leading-tight tracking-tight text-zinc-700 md:text-sm">
                                    <span className="mr-1.5 text-blue-400">•</span>{item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-5 rounded-lg border-2 border-blue-400 bg-blue-500 p-4 text-center md:mt-6 md:p-5">
                    <p className="font-sans text-sm leading-tight tracking-tight text-white md:text-base">
                        {t.conclusion}<span className="font-bold">{t.conclusionBold}</span>{t.conclusionEnd}
                    </p>
                </div>
            </div>
        </div>
    );
}
