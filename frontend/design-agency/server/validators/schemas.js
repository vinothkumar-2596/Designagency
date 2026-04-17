import { z } from 'zod'

const seoSchema = z.object({
  title: z.string().min(3).max(80),
  description: z.string().min(10).max(180),
  keywords: z.array(z.string()).default([]),
  canonicalPath: z.string().default('/'),
  noIndex: z.boolean().default(false),
  schemaType: z.string().default('WebPage'),
})

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
})

export const contentParamsSchema = z.object({
  params: z.object({
    type: z.enum(['blog', 'case-studies', 'services']),
  }),
  query: z.object({
    includeDrafts: z.string().optional(),
  }),
})

export const contentSlugSchema = z.object({
  params: z.object({
    type: z.enum(['blog', 'case-studies', 'services']),
    slug: z.string().min(1),
  }),
})

export const createContentSchema = z.object({
  params: z.object({
    type: z.enum(['blog', 'case-studies', 'services']),
  }),
  body: z.object({
    title: z.string().min(3),
    slug: z.string().optional(),
    excerpt: z.string().min(10),
    body: z.string().min(10),
    status: z.enum(['draft', 'published']).default('draft'),
    publishedAt: z.string().datetime().optional(),
    heroImage: z.string().url().optional(),
    meta: seoSchema.optional(),
  }),
})

export const updateContentSchema = z.object({
  params: z.object({
    id: z.string().min(1),
  }),
  body: z
    .object({
      title: z.string().min(3).optional(),
      slug: z.string().optional(),
      excerpt: z.string().min(10).optional(),
      body: z.string().min(10).optional(),
      status: z.enum(['draft', 'published']).optional(),
      publishedAt: z.string().datetime().optional().nullable(),
      heroImage: z.string().url().optional(),
      meta: seoSchema.optional(),
    })
    .refine((value) => Object.keys(value).length > 0, {
      message: 'At least one field is required',
    }),
})

export const deleteContentSchema = z.object({
  params: z.object({
    id: z.string().min(1),
  }),
})

export const leadSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    company: z.string().max(100).optional(),
    budget: z.string().max(80).optional(),
    message: z.string().min(10).max(2000),
    source: z.string().max(80).optional(),
  }),
})

export const seoParamsSchema = z.object({
  params: z.object({
    path: z.string().min(1),
  }),
})

export const upsertSeoSchema = z.object({
  params: z.object({
    path: z.string().min(1),
  }),
  body: seoSchema,
})
