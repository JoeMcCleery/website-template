import { getHash } from '@/utilities/hash'

export const getSeededColour = (seed: number | string) => {
  if (typeof seed === 'string') {
    seed = getHash(seed)
  }
  const colour = Math.floor(Math.abs(Math.sin(seed) * 16777215))
  return '#' + colour.toString(16).padStart(6, '0')
}
