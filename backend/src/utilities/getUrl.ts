export const filteredSlugs = (slugs: string[]) => slugs.filter((s) => !!s && s !== '/')
export const getPath = (...slugs: string[]) => `/${filteredSlugs(slugs).join('/')}`

export const getAppUrl = (...slugs: string[]) => {
  let path = getPath(...slugs)
  if (path === '/') path = ''
  return `https://${process.env.DOMAIN_APP || 'localhost'}${path}`
}

export const getCmsUrl = (...slugs: string[]) => {
  let path = getPath(...slugs)
  if (path === '/') path = ''
  return `https://cms.${process.env.DOMAIN_APP || 'localhost'}${path}`
}

export const appUrl = getAppUrl()
export const cmsUrl = getCmsUrl()
