const withCSS = require('@zeit/next-css')
const recipes = require('./pages/api/recipes/index.json')

const paths = {
  '/': { page: '/' },
  '/about': { page: '/about' },
  '/recipes': { page: '/recipes' }
}

recipes.forEach(({ id }) => {
  paths[`/recipes/${id}`] = { page: '/recipe', query: { id } }
})

module.exports = withCSS({
  cssModules: true,
  distDir: 'dist',
  exportPathMap: defaultPathMap => paths
})
