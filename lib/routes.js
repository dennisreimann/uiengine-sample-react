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
  home: '/design-system/_variants/HomePage/HomePage.js-1.html',
  recipes: '/design-system/_variants/RecipesPage/RecipesPage.js-1.html',
  recipe: '/design-system/_variants/RecipePage/RecipePage.js-1.html',
  about: '/design-system/_variants/AboutPage/AboutPage.js-1.html',
  designsystem: '/design-system/'
}

const RoutesContext = createContext(APP_ROUTES)

module.exports = {
  APP_ROUTES,
  UIENGINE_ROUTES,
  RoutesContext
}
