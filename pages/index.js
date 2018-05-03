import Layout, { Main, Sidebar } from '../components/Layout'
import Heading from '../components/Heading'
import RecipeItem from '../components/RecipeItem'
import RecipeService from '../lib/recipe_service'
import Link from 'next/link'
import css from './pages.css'

const Index = ({ recipes }) => (
  <Layout>
    <Main>
      <section>
        <Heading title="Welcome to Tasty BBQ" />
        <p>
          Bacon ipsum dolor amet turducken doner shankle pancetta, pastrami bresaola
          fatback pig ball tip. Swine picanha bacon shank pork chop turducken tail
          tongue pork loin burgdoggen. Biltong pork belly meatloaf ham, chicken bacon
          drumstick alcatra shoulder strip steak. Short ribs meatloaf biltong salami.
        </p>
      </section>

      <section className={css.teasers}>
        {recipes.map(recipe => (<RecipeItem recipe={recipe} key={recipe.id} teaser={true} />))}
      </section>

      <section>
        <p>
          Biltong pork belly meatloaf ham, chicken bacon drumstick alcatra shoulder
          strip steak. Short ribs meatloaf biltong salami.Bacon ipsum dolor amet
          turducken doner shankle pancetta, pastrami bresaola fatback pig ball tip.
          Swine picanha bacon shank pork chop turducken tail tongue pork loin burgdoggen.
          &emsp;
          <Link href='/recipes'>
            <a>Try the tasty recipes!</a>
          </Link>
        </p>

        <Heading level={2} title="Learn more" />
        <p>
          Bacon ipsum dolor amet turducken doner shankle pancetta, pastrami bresaola
          fatback pig ball tip. Swine picanha bacon shank pork chop turducken tail
          tongue pork loin burgdoggen. Biltong pork belly meatloaf ham, chicken bacon
          drumstick alcatra shoulder strip steak. Short ribs meatloaf biltong salami.
        </p>
        <p>
          <Link href='/about'>
            <a>More about us</a>
          </Link>
        </p>
      </section>
    </Main>

    <Sidebar />
  </Layout>
)

Index.getInitialProps = async () => {
  const recipes = await RecipeService.load('index')

  return { recipes }
}

export default Index
