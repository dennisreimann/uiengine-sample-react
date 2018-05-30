const withCSS = require('@zeit/next-css')
const { recipeIds } = require('./lib/util')

const paths = {
  '/': { page: '/' },
  '/about': { page: '/about' },
  '/recipes': { page: '/recipes' }
}

recipeIds.forEach(id => {
  paths[`/recipes/${id}`] = { page: '/recipe', query: { id } }
})

module.exports = withCSS({
  cssModules: true,
  distDir: 'dist',
  exportPathMap: defaultPathMap => paths
})
