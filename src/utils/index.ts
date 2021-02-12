import { startOfToday } from 'date-fns'

export const formatDate = (date: string, locale?: string): string => {
  const parsedDate = new Date(date)

  const formatter = new Intl.DateTimeFormat(locale as string, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC'
  })

  return formatter.format(parsedDate)
}

export const formatLongDate = (date: string, locale?: string): string => {
  const parsedDate = new Date(date)

  const formatter = new Intl.DateTimeFormat(locale as string, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })

  return formatter.format(parsedDate)
}

export const hasBeenReleased = (someDate: string): boolean => {
  const today = startOfToday()

  const compareDate = new Date(someDate)

  return compareDate <= today
}
