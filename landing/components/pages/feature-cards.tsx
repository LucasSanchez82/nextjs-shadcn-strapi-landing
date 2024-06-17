import Image from "next/image"
import HeadingText from "@/components/heading-text"
import { featureCards } from "@/config/contents"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import type { IconKeys } from "@/components/icons"

export default function FeatureCards({title, subtitle, featureCards}: {title: string, subtitle: string | null, featureCards: {
  subtitle: string | null;
  title: string;
  illustrate_icon: string;
}[];}) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="container space-y-8 py-12 text-center lg:py-20">
        {title ? (
          <HeadingText subtext={subtitle || undefined}>
            {title}
          </HeadingText>
        ) : null}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featureCards.map((card, index) => {
            const Icon = Icons[card.illustrate_icon in Icons ? card.illustrate_icon as IconKeys : 'blank']
            return (
              <Card
                key={card.title + index}
                className="flex flex-grow flex-col items-center justify-between gap-4 p-8 dark:bg-secondary"
              >
                <div className="flex">
                  <Icon className="h-[6rem] w-[6rem]" />
                </div>
                <div className="space-y-2">
                  <CardTitle>{card.title}</CardTitle>
                  {card.subtitle ?? (<CardDescription>{card.subtitle}</CardDescription>)}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
