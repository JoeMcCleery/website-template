import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Config } from '@common/payload-types'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { seoPlugin } from '@payloadcms/plugin-seo'
import {
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  ItalicFeature,
  LinkFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'

import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Users } from '@/collections/Users'
import { Footer } from '@/globals/Footer'
import { MainMenu } from '@/globals/MainMenu'
import { SiteConfig } from '@/globals/SiteConfig'
import { getSiteConfig } from '@/utilities/getGlobals'
import { appUrl, cmsUrl, getAppUrl } from '@/utilities/getUrl'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const devMode = process.env.NODE_ENV == 'development'

export default buildConfig({
  serverURL: cmsUrl,
  cors: [appUrl],
  csrf: [appUrl],
  admin: {
    user: Users.slug,
    avatar: {
      Component: '/components/account/AccountAvatar.tsx',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ data }) => getAppUrl(data.path),
      collections: ['pages'],
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
      ],
    },
    components: {
      graphics: {
        Icon: '/components/graphics/IconGraphic.tsx',
        Logo: '/components/graphics/LogoGraphic.tsx',
      },
    },
  },
  globals: [SiteConfig, MainMenu, Footer],
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
    outputFile: path.resolve(dirname, '../../common/payload-types.ts'),
    declare: false,
  },
  graphQL: {
    schemaOutputFile: path.resolve(dirname, '../../common/schema.graphql'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET ?? 'website-template-bucket',
      config: {
        endpoint: process.env.AWS_ENDPOINT,
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
        },
        region: process.env.AWS_DEFAULT_REGION ?? 'ap-southeast-2',
      },
    }),
    formBuilderPlugin({
      fields: {
        payment: false,
      },
    }),
    seoPlugin({
      tabbedUI: true,
      globals: ['site-config'],
      collections: ['pages'],
      uploadsCollection: 'media',
      generateTitle: async ({ doc, collectionSlug }) => {
        const config = await getSiteConfig()
        const title = config.settings.websiteTitle
        if (collectionSlug === 'pages') {
          return `${title} - ${doc.title}`
        }
        return title
      },
      generateURL: ({ doc }) => getAppUrl(doc.path),
    }),
  ],
})

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
