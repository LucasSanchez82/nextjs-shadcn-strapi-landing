import { z } from "zod"

export const landingSchema = z.object({
    data: z.object({
      landings: z.object({
        data: z.array(
          z.object({
            attributes: z.object({
              subtitle: z.string(),
              title: z.string(),
              main_button: z.object({ libelle: z.string(), link: z.string() }),
              features: z.object({
                title: z.string(),
                subtitle: z.string(),
                feature_card: z.array(
                  z.object({
                    title: z.string(),
                    subtitle: z.string(),
                    svg: z.string()
                  })
                ),
                img: z.object({
                  data: z.object({ attributes: z.object({ url: z.string() }) })
                })
              }),
              image_principal: z.object({
                data: z.object({ attributes: z.object({ url: z.string() }) })
              }),
              banner: z.object({
                title: z.string(),
                subtitle: z.string(),
                banner_card: z.array(
                    z.object({
                      title: z.string(),
                      subtitle: z.union([z.string(), z.null()]),
                      illustrate_icon: z.string()
                    })
                )
              }),
              createdAt: z.coerce.date(),
              updatedAt: z.coerce.date()
            })
          })
        ).min(1)
      })
    })
  })
  
  

type LandingBrut = z.infer<typeof landingSchema>

export type Landing =
  LandingBrut["data"]["landings"]["data"][number]["attributes"]
