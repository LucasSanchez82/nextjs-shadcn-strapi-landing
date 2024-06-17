import Hero from "@/components/pages/hero"
import FeatureCards from "@/components/pages/feature-cards"
import Features from "@/components/pages/features"
import { Landing, landingSchema } from "@/controller/schemas/landingSchema"
import { log } from "console"
import { fetchGraphQL } from "@/controller/landing"
import { subtle } from "crypto"

export default async function Home() {


  const unsafeResult = landingSchema.safeParse(await fetchGraphQL())
  if (unsafeResult.success) {
    console.log(JSON.stringify(unsafeResult.data, null, 2))

    const { main_button: mainButton, image_principal: imgPrincipal, features, banner,...landing }: Landing =
      unsafeResult.data.data.landings.data[0].attributes
    return (
      <main>
        <Hero
          buttonLink={mainButton.link ?? "/"}
          buttonTitle={mainButton.libelle ?? "default button"}
          title={landing.title || "default title"}
          subtitle={landing.subtitle}
          imgUrl={imgPrincipal.data.attributes.url}
        />
        <FeatureCards
        featureCards={banner.banner_card}
        title={banner.title}
        subtitle={banner.title}
        />
        <Features
        featureCard={features.feature_card}
        imgUrl={'http://localhost:1337' + features.img.data.attributes.url}
        subtitle={features.subtitle}
        title={features.title}
        />

      </main>
    )
  } else {
    console.log("erreur")
    console.log(unsafeResult.error)

    return <main>We have internal problemes, go back later</main>
  }
}
