import React from 'react'
import Layout, { Main } from '../components/Layout'
import Heading from '../components/Heading'
import RecipeItem from '../components/RecipeItem'
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

export default Recipes
