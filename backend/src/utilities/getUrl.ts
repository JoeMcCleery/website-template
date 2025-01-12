export const getAppURL = (...slug: string[]) => {
  slug = slug.filter((s) => !!s)
  let path = ''
  if (slug.length > 0) {
    path = `/${slug.join('/')}`
  }
  return `https://${process.env.DOMAIN_APP || 'localhost'}${path}`
}

export const getCmsURL = (...slug: string[]) => {
  slug = slug.filter((s) => !!s)
  let path = ''
  if (slug.length > 0) {
    path = `/${slug.join('/')}`
  }
  return `https://cms.${process.env.DOMAIN_APP || 'localhost'}${path}`
}

export const appURL = getAppURL()
export const cmsURL = getCmsURL()
