import { shape, string } from 'prop-types'

export const Recipe = shape({
  id: string,
  title: string
})
