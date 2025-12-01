'use client';

interface Slide3Props {
  language: 'en' | 'jp';
}

export default function Slide3({ language }: Slide3Props) {
  const content = {
    en: {
      title: "Learning from Global Leaders",
      subtitle: "Countries with Strong Psychosocial Programs",
      partners: [
        {
          country: "Indonesia (Banda Aceh)",
          programs: "Post-tsunami community counseling, Psychological First Aid"
        },
        {
          country: "Sri Lanka",
          programs: "Community-based mental health integration"
        },
        {
          country: "Nepal",
          programs: "Locally trained counselors after 2015 earthquakes"
        },
        {
          country: "Haiti",
          programs: "Long-term mental health systems post-earthquake"
        },
        {
          country: "Philippines",
          programs: "Typhoon Haiyan psychosocial response"
        }
      ],
      highlightTitle: "Existing Partnership",
      highlightText: "Kamaishi ↔ Banda Aceh exchange program",
      highlightSource: "JICA, 2024"
    },
    jp: {
      title: "グローバルリーダーから学ぶ",
      subtitle: "強力な心理社会的プログラムを持つ国々",
      partners: [
        {
          country: "インドネシア（バンダアチェ）",
          programs: "津波後のコミュニティカウンセリング、心理的応急処置"
        },
        {
          country: "スリランカ",
          programs: "コミュニティベースのメンタルヘルス統合"
        },
        {
          country: "ネパール",
          programs: "2015年地震後の地元訓練カウンセラー"
        },
        {
          country: "ハイチ",
          programs: "地震後の長期メンタルヘルスシステム"
        },
        {
          country: "フィリピン",
          programs: "台風ハイエン心理社会的対応"
        }
      ],
      highlightTitle: "既存のパートナーシップ",
      highlightText: "釜石 ↔ バンダアチェ交流プログラム",
      highlightSource: "JICA, 2024"
    }
  };

  const t = content[language];

  return (
    <div className="flex h-full w-full items-center justify-center px-4 py-4 md:px-8 md:py-6">
      <div className="w-full max-w-4xl">
        <h1 className="mb-3 text-center font-serif text-2xl font-semibold tracking-tight text-zinc-900 md:mb-4 md:text-4xl">
          {t.title}
        </h1>
        <p className="mb-5 text-center font-sans text-base tracking-tight text-blue-600 md:mb-6 md:text-xl">
          {t.subtitle}
        </p>

        <div className="space-y-4 md:space-y-5">
          <div className="space-y-3">
            {t.partners.map((partner, idx) => (
              <div key={idx} className="rounded-lg border border-blue-100 bg-blue-50/50 p-3 md:p-4">
                <p className="font-serif text-sm font-semibold text-blue-700 md:text-base">
                  {partner.country}
                </p>
                <p className="mt-1 font-sans text-xs leading-snug tracking-tight text-zinc-700 md:text-sm">
                  {partner.programs}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border-2 border-blue-400 bg-blue-200 p-4 md:p-5">
            <p className="mb-1 font-sans text-xs font-medium tracking-tight text-blue-800 md:text-sm">
              {t.highlightTitle}
            </p>
            <p className="font-serif text-base font-semibold leading-snug text-blue-900 md:text-lg">
              {t.highlightText}
            </p>
            <p className="mt-1 font-sans text-xs text-blue-700 md:text-sm">
              {t.highlightSource}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
