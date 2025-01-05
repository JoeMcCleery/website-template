import { postgresAdapter } from '@payloadcms/db-postgres'
import {
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { getMeta } from './utilities/getGlobals'

import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { Media } from './collections/Media'

import { Meta } from './globals/Meta'
import { MainMenu } from './globals/MainMenu'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const devMode = process.env.NODE_ENV == 'development'

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [Meta, MainMenu],
  collections: [Pages, Users, Media],
  editor: lexicalEditor({
    features: () => {
      return [
        BoldFeature(),
        ItalicFeature(),
        LinkFeature({ enabledCollections: ['pages'] }),
        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] }),
        FixedToolbarFeature(),
        InlineToolbarFeature(),
      ]
    },
  }),
  email: devMode
    ? nodemailerAdapter()
    : nodemailerAdapter({
        defaultFromAddress: process.env.DEFAULT_FROM_EMAIL || 'info@payloadcms.com',
        defaultFromName: process.env.DEFAULT_FROM_EMAIL_NAME || 'Payload',
        transportOptions: {
          host: process.env.SMTP_HOST,
          port: 587,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        },
      }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    formBuilderPlugin({
      fields: {
        payment: false,
      },
    }),
    seoPlugin({
      tabbedUI: true,
      collections: ['pages'],
      uploadsCollection: 'media',
      generateTitle: async ({ doc }) => {
        const meta = await getMeta()
        return `${meta.websiteTitle} - ${doc?.title}`
      },
      generateURL: ({ doc, collectionSlug }) =>
        `https://${process.env.DOMAIN_APP || 'localhost'}/${collectionSlug}/${doc?.slug}`,
    }),
  ],
})
