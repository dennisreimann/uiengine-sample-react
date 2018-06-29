import fetch from 'isomorphic-unfetch'
import { APP_HOST } from './env'

const RecipeService = {
  load: async path => {
    const url = `${APP_HOST}/static/api/recipes/${path}.json`
    const response = await fetch(url)
    const data = await response.json()

    return data
  }
}

export default RecipeService
