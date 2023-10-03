import { defineCollection, z, type SchemaContext } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }: SchemaContext) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default(["all"]),
      heroImage: image().refine((img) => img.width >= 720, {
        message: "Cover image must be at least 720 pixels wide!",
      }),
      heroAlt: z.string().optional().default("Hero Image"),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      featured: z.boolean().optional(),
    }),
});

const projects = defineCollection({
  schema: ({ image }: SchemaContext) =>
    z.object({
      title: z.string(),
      description: z.string(),
      link: z.string(),
      tags: z.array(z.string()).default(["all"]),
      heroImage: image().refine((img) => img.width >= 1200, {
        message: "Cover image must be at least 1200 pixels wide!",
      }),
      heroAlt: z.string().optional().default("Hero Image"),
      featured: z.boolean().default(false),
    }),
});

export const collections = { blog, projects };
