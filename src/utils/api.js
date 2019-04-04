import fly from './fly/flyio'

export function userLogin (data) {
  console.log(data)
  return fly.get('/mock')
}
