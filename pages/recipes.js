import Layout, { Main } from '../components/Layout'
import Heading from '../components/Heading'
import RecipeItem from '../components/RecipeItem'
import ApiService from '../lib/api_service'

const Recipes = ({ recipes }) => (
  <Layout>
    <Main>
      <Heading title="Recipes" />
      <section>
        {recipes.map(recipe => (<RecipeItem recipe={recipe} key={recipe.id} />))}
      </section>
    </Main>
  </Layout>
)

Recipes.getInitialProps = async () => {
  const recipes = await ApiService.load(`/recipes/index`)

  return { recipes }
}

export default Recipes
