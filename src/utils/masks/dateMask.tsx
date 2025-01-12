export function dateMask(date: string){
  const formattedDate = date
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2');

    return formattedDate
}