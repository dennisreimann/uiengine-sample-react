import Layout from '../components/Layout'
import Heading from '../components/Heading'
import RecipeListItem from '../components/RecipeListItem'
import ApiService from '../lib/api_service'

const Recipes = ({ recipes }) => (
  <Layout>
    <Heading title="Recipes" />
    <section>
      {recipes.map(recipe => (<RecipeListItem recipe={recipe} key={recipe.id} />))}
    </section>
  </Layout>
)

Recipes.getInitialProps = async () => {
  const recipes = await ApiService.load(`/recipes/index`)

  return { recipes }
}

export default Recipes
