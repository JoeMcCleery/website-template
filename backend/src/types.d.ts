import type { Config } from '@common/payload-types'

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
