import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroHeader } from "@/config/contents"

export default function HeroHeader({
  title,
  subtitle,
buttonLink,
buttonTitle,
imgUrl
}: {
  title: string
  subtitle?: string
  buttonTitle: string
  buttonLink: string
  imgUrl: string
}) {
  return (
    <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold lg:text-6xl">{title}</h1>
          {subtitle ?? (
            <h2 className="text-lg font-light text-muted-foreground lg:text-3xl">
              {subtitle}
            </h2>
          )}
        </div>
        <Link
          href={buttonLink}
          target="_blank"
          className={`w-[10rem] ${cn(buttonVariants({ size: "lg" }))}`}
        >
          {buttonTitle}
        </Link>
      </div>
      {heroHeader.image !== "" ? (
        <div className="flex flex-1 justify-center lg:justify-end">
          <Image
            src={'http://localhost:1337' + imgUrl}
            width={500}
            height={500}
            alt="Header image"
          />
        </div>
      ) : (
        <></>
      )}
    </section>
  )
}
