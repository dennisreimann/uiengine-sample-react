import Layout from '../components/Layout'
import Heading from '../components/Heading'
import ApiService from '../lib/api_service'

const Recipe = ({ recipe }) => (
  <Layout>
    <Heading title={recipe.title} />
    <p>{recipe.summary}</p>
    <img src={recipe.mainImage} />
  </Layout>
)

Recipe.getInitialProps = async function (context) {
  const { id } = context.query
  const recipe = await ApiService.load(`/recipes/${id}`)

  return { recipe }
}

export default Recipe
