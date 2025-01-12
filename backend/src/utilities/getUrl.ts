export const getPath = (...slug: string[]) => {
  slug = slug.filter((s) => !!s)
  let path = `/${slug.join('/')}`
  return path
}

export const getAppURL = (...slug: string[]) => {
  slug = slug.filter((s) => !!s)
  let path = getPath(...slug)
  if (path === '/') path = ''
  return `https://${process.env.DOMAIN_APP || 'localhost'}${path}`
}

export const getCmsURL = (...slug: string[]) => {
  slug = slug.filter((s) => !!s)
  let path = getPath(...slug)
  if (path === '/') path = ''
  return `https://cms.${process.env.DOMAIN_APP || 'localhost'}${path}`
}

export const appURL = getAppURL()
export const cmsURL = getCmsURL()
