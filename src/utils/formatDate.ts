export const formatDate = (date: string, locale?: string): string =>
  new Date(date).toLocaleDateString(locale)
