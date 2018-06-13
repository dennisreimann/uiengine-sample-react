import Home from '../templates/Home'
import RecipeService from '../lib/recipe_service'

Home.getInitialProps = async () => {
  const recipes = await RecipeService.load('index')

  return { recipes }
}

export default Home
