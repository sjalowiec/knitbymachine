import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'term',
  title: 'Glossary Term',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: r => r.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: r => r.required()
    }),
    defineField({
      name: 'aliases',
      title: 'Aliases/Synonyms',
      type: 'array',
      of: [{ type: 'string' }]
    }),

    // Card/SEO helper
    defineField({
      name: 'excerpt',
      title: 'Card Excerpt',
      type: 'string',
      description: '1–160 characters shown on cards and previews.',
      validation: r => r.max(160)
    }),

    defineField({
      name: 'definition',
      title: 'Definition',
      type: 'array',
      of: [{ type: 'block' }],
      validation: r => r.required()
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'media',
      title: 'Image or Diagram',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      description: 'Short description for accessibility and SEO (used on cards and term page).'
    }),

    defineField({
      name: 'related',
      title: 'Related terms',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'term' }] }]
    }),

    // Simple outbound links to other site parts (workshops, tools, patterns, ANAs, etc.)
    defineField({
      name: 'relatedLinks',
      title: 'Related Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label', validation: r => r.required() },
            { name: 'url', type: 'url', title: 'URL', validation: r => r.required() },
            {
              name: 'kind',
              type: 'string',
              title: 'Type',
              options: { list: ['Workshop', 'Tool', 'Pattern', 'ANA', 'Article', 'Other'] }
            }
          ]
        }
      ],
      description: 'Optional links to related site content (workshops, tools, patterns, ANAs).'
    }),

    defineField({
      name: 'status',
      type: 'string',
      initialValue: 'draft',
      options: { list: ['draft', 'review', 'published'] }
    })
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'aliases.0',
      media: 'media'
    }
  }
})
