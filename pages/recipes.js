import RecipesPage from '../page_components/RecipesPage'
import RecipeService from '../lib/recipe_service'

RecipesPage.getInitialProps = async () => {
  const recipes = await RecipeService.load()

  return { recipes }
}

export default RecipesPage
