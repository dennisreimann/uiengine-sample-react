import RecipePage from '../page_components/RecipePage'
import RecipeService from '../lib/recipe_service'

RecipePage.getInitialProps = async (context) => {
  const { id } = context.query
  const recipe = await RecipeService.load(id)

  return { recipe }
}

export default RecipePage
