export const url = 'https://express-shina.ru/vacancy/geo-state'

export const fetchPoints = () => {
  return fetch(url).then((res) => res.json())
}
