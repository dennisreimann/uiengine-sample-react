const withCSS = require('@zeit/next-css')
const recipes = require('./static/api/recipes')

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
