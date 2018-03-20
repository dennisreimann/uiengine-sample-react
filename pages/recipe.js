import Layout, { Main } from '../components/Layout'
import Heading from '../components/Heading'
import ApiService from '../lib/api_service'

const Recipe = ({ recipe }) => (
  <Layout>
    <Main>
      <Heading title={recipe.title} />
      <p>{recipe.summary}</p>
      <img src={recipe.mainImage} />
    </Main>
  </Layout>
)

Recipe.getInitialProps = async (context) => {
  const { id } = context.query
  const recipe = await ApiService.load(`/recipes/${id}`)

  return { recipe }
}

export default Recipe
