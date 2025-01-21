import { getPayload } from 'payload'

import type { Config, SiteConfig } from '@common/payload-types'

import configPromise from '@/payload.config'

type Global = keyof Config['globals']

async function getGlobal(slug: Global, depth = 0) {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
  })

  return global
}

export const getSiteConfig = async (depth = 0) =>
  (await getGlobal('site-config', depth)) as SiteConfig
