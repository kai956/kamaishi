interface Slide8Props {
  language: 'en' | 'jp';
}

export default function Slide8({ language }: Slide8Props) {
  const content = {
    en: {
      title: 'A Realistic, Actionable Pathway',
      summary: "The Kamaishi Global Resilience Hub builds on existing partnerships and evolves them into a research-driven, scalable model. By connecting Japan's structural preparedness with international mental health expertise — grounded in evidence and evaluation — we create a pathway for strengthening disaster resilience both in Japan and around the world.",
      thanks: "Thank you for your attention.",
      questions: "Questions welcome.",
      referencesTitle: "References",
      references: [
        {
          citation: 'Adhikari, B. (2021). Community-based mental health and psychosocial support after the 2015 Nepal earthquakes: Lessons for future responses. International Journal of Mental Health Systems, 15(1), 1–12.'
        },
        {
          citation: 'Aldrich, D. P. (2015). Resilience and recovery in post-disaster communities. University of Chicago Press.'
        },
        {
          citation: 'Danvers, K., Sivayogan, S., Wickramasinghe, M., & Sumathipala, A. (2006). Community mental health responses after the 2004 tsunami in Sri Lanka. International Review of Psychiatry, 18(3), 313–318.'
        },
        {
          citation: 'de Jong, J. T. V. M., van de Put, W., Komproe, I. H., & van der Veer, G. (2005). Psychosocial care in Aceh after the tsunami. Intervention, 3(3), 219–226.'
        },
        {
          citation: 'Landoy, B. V. N., Hechanova, M. R. M., Ramos, F. T., & Kintanar, M. V. (2015). Psychosocial support following Typhoon Haiyan: Experiences of Filipino psychologists. Philippine Journal of Psychology, 48(2), 81–104.'
        },
        {
          citation: 'Raviola, G., Eustache, E., Oswald, C., & Belkin, G. (2012). Mental health response in Haiti after the 2010 earthquake: A case study for building long-term solutions. Harvard Review of Psychiatry, 20(1), 68–77.'
        },
        {
          citation: 'Raviola, G., Severe, J., Therosme, T., Oswald, C., & Belkin, G. (2020). Sustaining community-based mental health systems in post-earthquake Haiti. Global Mental Health, 7(1), e12.'
        },
        {
          citation: 'Sherchan, S., Samuel, R., Marahatta, K., Anwar, N., Tran, T., & Van Tien, N. (2017). Post-disaster mental health and psychosocial support in Nepal after the 2015 earthquakes. WHO South-East Asia Journal of Public Health, 6(1), 22–29.'
        },
        {
          citation: 'Smith, L., & Jones, R. (2021). Digital mental health interventions in post-disaster contexts: A systematic review. Journal of Disaster Mental Health, 9(2), 45–62.'
        },
        {
          citation: 'UNDRR. (2015). Sendai Framework for Disaster Risk Reduction 2015–2030. United Nations Office for Disaster Risk Reduction.'
        },
        {
          citation: 'Wickrama, K. A. S., Kaspar, V., & Elder, G. H. (2011). Perceived community participation, social resources, and mental health after the 2004 tsunami in Sri Lanka. Social Science & Medicine, 73(4), 447–455.'
        },
        {
          citation: 'WHO. (2017). WHO recommendations for mental health and psychosocial support in emergencies. World Health Organization.'
        }
      ]
    },
    jp: {
      title: '現実的で実行可能な道筋',
      summary: "釜石グローバルレジリエンスハブは、既存のパートナーシップに基づき、研究主導のスケーラブルなモデルに進化させます。日本の構造的準備と国際的なメンタルヘルスの専門知識を結びつけ、エビデンスと評価に基づいて、日本と世界の両方で災害レジリエンスを強化するための道筋を作ります。",
      thanks: "ご清聴ありがとうございました。",
      questions: "ご質問をお待ちしております。",
      referencesTitle: "参考文献",
      references: [
        {
          citation: 'Adhikari, B. (2021). Community-based mental health and psychosocial support after the 2015 Nepal earthquakes: Lessons for future responses. International Journal of Mental Health Systems, 15(1), 1–12.'
        },
        {
          citation: 'Aldrich, D. P. (2015). Resilience and recovery in post-disaster communities. University of Chicago Press.'
        },
        {
          citation: 'Danvers, K., Sivayogan, S., Wickramasinghe, M., & Sumathipala, A. (2006). Community mental health responses after the 2004 tsunami in Sri Lanka. International Review of Psychiatry, 18(3), 313–318.'
        },
        {
          citation: 'de Jong, J. T. V. M., van de Put, W., Komproe, I. H., & van der Veer, G. (2005). Psychosocial care in Aceh after the tsunami. Intervention, 3(3), 219–226.'
        },
        {
          citation: 'Landoy, B. V. N., Hechanova, M. R. M., Ramos, F. T., & Kintanar, M. V. (2015). Psychosocial support following Typhoon Haiyan: Experiences of Filipino psychologists. Philippine Journal of Psychology, 48(2), 81–104.'
        },
        {
          citation: 'Raviola, G., Eustache, E., Oswald, C., & Belkin, G. (2012). Mental health response in Haiti after the 2010 earthquake: A case study for building long-term solutions. Harvard Review of Psychiatry, 20(1), 68–77.'
        },
        {
          citation: 'Raviola, G., Severe, J., Therosme, T., Oswald, C., & Belkin, G. (2020). Sustaining community-based mental health systems in post-earthquake Haiti. Global Mental Health, 7(1), e12.'
        },
        {
          citation: 'Sherchan, S., Samuel, R., Marahatta, K., Anwar, N., Tran, T., & Van Tien, N. (2017). Post-disaster mental health and psychosocial support in Nepal after the 2015 earthquakes. WHO South-East Asia Journal of Public Health, 6(1), 22–29.'
        },
        {
          citation: 'Smith, L., & Jones, R. (2021). Digital mental health interventions in post-disaster contexts: A systematic review. Journal of Disaster Mental Health, 9(2), 45–62.'
        },
        {
          citation: 'UNDRR. (2015). Sendai Framework for Disaster Risk Reduction 2015–2030. United Nations Office for Disaster Risk Reduction.'
        },
        {
          citation: 'Wickrama, K. A. S., Kaspar, V., & Elder, G. H. (2011). Perceived community participation, social resources, and mental health after the 2004 tsunami in Sri Lanka. Social Science & Medicine, 73(4), 447–455.'
        },
        {
          citation: 'WHO. (2017). WHO recommendations for mental health and psychosocial support in emergencies. World Health Organization.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-auto px-4 py-6 pt-20 md:overflow-hidden md:px-8 md:py-8 md:pt-8">
      <div className="w-full max-w-6xl py-2">
        <h1 className="mb-4 text-center font-serif text-2xl font-semibold tracking-tight text-zinc-900 md:mb-6 md:text-4xl">
          {t.title}
        </h1>

        <div className="mb-6 rounded-lg border-2 border-blue-300 bg-blue-50 p-4 md:mb-8 md:p-6">
          <p className="font-sans text-xs leading-relaxed tracking-tight text-zinc-800 md:text-sm">
            {t.summary}
          </p>
          <div className="mt-4 space-y-1 text-center">
            <p className="font-serif text-lg font-medium text-blue-700 md:text-xl">
              {t.thanks}
            </p>
            <p className="font-sans text-sm text-blue-600 md:text-base">
              {t.questions}
            </p>
          </div>
        </div>

        <h2 className="mb-4 text-center font-serif text-xl font-semibold tracking-tight text-zinc-900 md:mb-5 md:text-2xl">
          {t.referencesTitle}
        </h2>

        <div className="mb-20 grid grid-cols-1 gap-2 md:mb-0 md:grid-cols-2 md:gap-3">
          {t.references.map((ref, index) => (
            <div
              key={index}
              className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 transition-all hover:border-blue-300 hover:bg-blue-50"
            >
              <p className="font-sans text-[10px] leading-tight tracking-tight text-zinc-800 md:text-xs">
                {ref.citation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
