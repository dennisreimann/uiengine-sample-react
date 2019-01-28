import React from 'react'
import PropTypes from 'prop-types'
import Layout, { Main, Sidebar } from '../../components/Layout'
import Heading from '../../components/Heading'
import RecipeItem from '../../components/RecipeItem'
import { Recipe } from '../../lib/types'
import { APP_ROUTES } from '../../lib/routes'
import Link from 'next/link'
import css from '../pages.css'

const HomePage = ({ recipes }) => (
  <Layout>
    <Main>
      <section>
        <Heading title='Welcome to Tasty BBQ' />
        <p>
          This is a sample project to showcase the basic functionality provided by the <a href='https://github.com/dennisreimann/uiengine'>UIengine</a>.
          This website is built with React and Next.js.
          Also see the <a href={APP_ROUTES.designsystem}>corresponding design system</a> documentation, built with the UIengine.
        </p>
        <p>
          You can check out the <a href='https://github.com/dennisreimann/uiengine-sample-react'>source code on GitHub</a>.
        </p>
      </section>

      <section className={css.teasers}>
        {recipes.map(recipe => (
          <RecipeItem recipe={recipe} key={recipe.id} teaser />
        ))}
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

        <Heading level={2} title='Learn more' />
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

HomePage.propTypes = {
  recipes: PropTypes.arrayOf(Recipe)
}

export default HomePage
