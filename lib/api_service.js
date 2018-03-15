import fetch from 'isomorphic-unfetch'

const BASE = 'http://localhost:3000/api'

const ApiService = {
  load: async path => {
    const url = BASE + path
    const response = await fetch(url)
    const data = await response.json()

    return data
  }
}

export default ApiService
