export function dateString(date: Date) {
  return date.toISOString().split('T')[0];
}
