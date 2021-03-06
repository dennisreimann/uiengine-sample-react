import HomePage from '../page_components/HomePage'
import RecipeService from '../lib/recipe_service'

HomePage.getInitialProps = async () => {
  const recipes = await RecipeService.load()

  return { recipes }
}

export default HomePage
