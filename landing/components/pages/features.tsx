import Image from "next/image"
import HeadingText from "@/components/heading-text"
import { features } from "@/config/contents"
import { IconKeys, Icons } from "@/components/icons"

export default function Features({
  title,
  subtitle,
  featureCard,
  imgUrl,
}: {
  readonly title: string
  readonly subtitle: string | null
  readonly imgUrl: string
  readonly featureCard: {
    title: string
    subtitle: string
    svg: string
  }[]
}) {
  return (
    <section className="container space-y-8 py-12 lg:py-20" id="features">
      {title ?? (
        <HeadingText subtext={subtitle ?? undefined} className="text-center">
          {title}
        </HeadingText>
      )}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-1 gap-8">
          {featureCard.map((card, index) => {
            const Icon =
              Icons[card.svg in Icons ? (card.svg as IconKeys) : "blank"]

            return (
              <div
                key={card.title + index}
                className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-8 md:text-left"
              >
                <div className="flex">
                  <Icon className="h-[6rem] w-[6rem]" />
                </div>
                <div className="flex-1">
                  <p className="md:text4xl text-2xl font-semibold">
                    {card.title}
                  </p>
                  {card.subtitle ?? (
                    <p className="font-light text-muted-foreground md:text-lg">
                      {card.subtitle}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        <div
          className="md:border"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></div>
      </div>
    </section>
  )
}
