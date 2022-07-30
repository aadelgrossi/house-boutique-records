export function debounce<F extends (...params: unknown[]) => void>(
  fn: F,
  delay: number
): F {
  let timeoutID: number
  return function (this: unknown, ...args: unknown[]) {
    clearTimeout(timeoutID)
    timeoutID = window.setTimeout(() => fn.apply(this, args), delay)
  } as F
}
