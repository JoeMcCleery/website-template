export const toIconName = (val: string) => {
  return val.replace(/_/g, ' ').trim().toLowerCase().replace(/( )+/g, '_')
}
