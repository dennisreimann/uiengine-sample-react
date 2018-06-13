import Recipe from '../templates/Recipe'
import RecipeService from '../lib/recipe_service'

Recipe.getInitialProps = async (context) => {
  const { id } = context.query
  const recipe = await RecipeService.load(id)

  return { recipe }
}

export default Recipe
