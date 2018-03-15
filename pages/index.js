import Layout from '../components/Layout'
import Heading from '../components/Heading'
import ApiService from '../lib/api_service'
import Link from 'next/link'

const Index = ({ recipes }) => (
  <Layout>
    <Heading title="Tasty BBQ – homemade and delicious!" />
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id}>
          <Link as={`/recipe/${recipe.id}`} href={`/recipe?id=${recipe.id}`}>
            <a>
              <Heading title={recipe.title} level="2" />
              <br />
              <img src={`/static/images/recipes/${recipe.id}/preview.jpg`} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const recipes = await ApiService.load('/recipes/index')

  return { recipes }
}

export default Index
