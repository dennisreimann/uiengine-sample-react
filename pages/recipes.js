import Layout, { Main } from '../components/Layout'
import Heading from '../components/Heading'
import RecipeItem from '../components/RecipeItem'
import ApiService from '../lib/api_service'
import css from './pages.css'

const Recipes = ({ recipes }) => (
  <Layout>
    <Main>
      <Heading title="Recipes" />
      <section className={css.recipes}>
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
