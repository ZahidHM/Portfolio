import { defineCollection, z } from "astro:content";

//zod - schema


const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string(),
        img: z.string(),
        description: z.string(),
    })
})
export const collections = { projects };