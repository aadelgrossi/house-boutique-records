export const formatDate = (date: string, locale?: string): string =>
  new Date(date).toLocaleDateString(locale)

export const hasBeenReleased = (someDate: string): boolean => {
  const today = new Date()
  const compareDate = new Date(someDate)

  return compareDate <= today
}
