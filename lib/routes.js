const { createContext } = require('react')
const { UIE_HOST } = require('./env')

const APP_ROUTES = {
  home: '/',
  recipes: '/recipes',
  recipe: '/recipe',
  about: '/about',
  designsystem: `${UIE_HOST}/design-system/`
}

const UIENGINE_ROUTES = {
  home: '/_pages/prototype/home.html',
  recipes: '/_pages/prototype/recipes.html',
  recipe: '/_pages/prototype/recipe.html',
  about: '/_pages/prototype/about.html',
  designsystem: '/design-system/'
}

const RoutesContext = createContext(APP_ROUTES)

module.exports = {
  APP_ROUTES,
  UIENGINE_ROUTES,
  RoutesContext
}
