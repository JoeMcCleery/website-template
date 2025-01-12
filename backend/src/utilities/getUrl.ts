export const getUrl = (...slug: string[]) => {
  slug = slug.filter((s) => !!s)
  let path = ''
  if (slug.length > 0) {
    path = `/${slug.join('/')}`
  }
  return `https://${process.env.DOMAIN_APP || 'localhost'}${path}`
}
