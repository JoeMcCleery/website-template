import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import type { Config, Meta } from 'src/payload-types'

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

export const getMeta = async (depth = 0) => (await getGlobal('meta', depth)) as Meta
