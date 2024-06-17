export const fetchGraphQL = async () => {
  const query = `
  query Landings {
    landings {
        data {
            attributes {
                subtitle
                title
                main_button {
                    libelle
                    link
                }
                features {
                    title
                    subtitle
                    feature_card {
                        title
                        subtitle
                        svg
                    }
                    img {
                      data {
                          attributes {
                              url
                          }
                      }
                  }
                }
                image_principal {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                banner {
                    title
                    subtitle
                    banner_card {
                        title
                        subtitle
                        illustrate_icon
                    }
                }
                createdAt
                updatedAt
            }
        }
    }
}
  
  `

  const url = "http://localhost:1337/graphql"
  const token =
    "a9e37899785158fa14f1eaabe0ba9eb353478e68f9b2aea084edf49e4cf3ad09193768e5d461ba8743fa7a58c2839747c05d6a1815bbe1b5bae9f0bdaec2754b712a12bdd1ce80747cb88ce903f139f7343323809fc7226ea7f5519f632896a5a61fe4d233d2449dae784d3e0d9f6d836d1105cc4609e5cf7e860c426e617fab"
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
      body: JSON.stringify({ query }),
    })

    const result = await response.json()
    return result
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}
