import fetch from 'isomorphic-unfetch'
import { HOST } from './env'

const RecipeService = {
  load: async path => {
    const url = `${HOST}/static/api/recipes/${path}.json`
    const response = await fetch(url)
    const data = await response.json()

    return data
  }
}

export default RecipeService
