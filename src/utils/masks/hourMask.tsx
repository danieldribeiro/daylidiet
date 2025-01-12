export function hourMask(hour: string){
  const formatted = hour
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1:$2')

    return formatted
}