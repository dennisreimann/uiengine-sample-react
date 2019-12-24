import fetch from 'isomorphic-unfetch'
import { APP_HOST } from './env'

const RecipeService = {
  load: async (path = '') => {
    const url = `${APP_HOST}/api/recipes${path}`

    try {
      const response = await fetch(url)
      const data = await response.json()

      return data
    } catch (err) {
      const file = path === '' ? '/index' : path
      const data = require(`../pages/api/recipes${file}.json`)

      return data
    }
  }
}

export default RecipeService
