import Layout from '../components/Layout'
import Heading from '../components/Heading'
import RecipeItem from '../components/RecipeItem'
import ApiService from '../lib/api_service'
import Link from 'next/link'

const Index = ({ recipes }) => (
  <Layout>
    <Heading title="Welcome to Tasty BBQ" />
    <p>
      Bacon ipsum dolor amet turducken doner shankle pancetta, pastrami bresaola
      fatback pig ball tip. Swine picanha bacon shank pork chop turducken tail
      tongue pork loin burgdoggen. Biltong pork belly meatloaf ham, chicken bacon
      drumstick alcatra shoulder strip steak. Short ribs meatloaf biltong salami.
    </p>
    <section>
      {recipes.map(recipe => (<RecipeItem recipe={recipe} key={recipe.id} teaser={true} />))}
    </section>
  </Layout>
)

Index.getInitialProps = async () => {
  const recipes = await ApiService.load('/recipes/index')

  return { recipes }
}

export default Index
