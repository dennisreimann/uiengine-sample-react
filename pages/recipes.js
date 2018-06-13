import Recipes from '../templates/Recipes'
import RecipeService from '../lib/recipe_service'

Recipes.getInitialProps = async () => {
  const recipes = await RecipeService.load('index')

  return { recipes }
}

export default Recipes
