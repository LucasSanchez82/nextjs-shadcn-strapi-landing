import { fetchGraphQL } from "@/controller/landing"
import { landingSchema } from "@/controller/schemas/landingSchema"
import { describe, expect, it } from "bun:test"
import { exec } from "child_process"
describe("fetch graphql datas", async () => {
  it("test structuee data fetched", async () => {
    const datas = await fetchGraphQL()
    const safeParsed = landingSchema.safeParse(datas)
    expect(safeParsed.success).toBeTrue()
  })
})
