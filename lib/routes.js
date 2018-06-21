const { createContext } = require('react')

const APP_ROUTES = {
  home: '/',
  recipes: '/recipes',
  recipe: '/recipe',
  about: '/about'
}

const UIENGINE_ROUTES = {
  home: '/_pages/prototype/home.html',
  recipes: '/_pages/prototype/recipes.html',
  recipe: '/_pages/prototype/recipe.html',
  about: '/_pages/prototype/about.html'
}

const RoutesContext = createContext(APP_ROUTES)

module.exports = {
  APP_ROUTES,
  UIENGINE_ROUTES,
  RoutesContext
}
