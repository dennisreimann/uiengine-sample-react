import React from 'react'
import PropTypes from 'prop-types'
import Layout, { Main } from '../../components/Layout'
import Heading from '../../components/Heading'
import RecipeItem from '../../components/RecipeItem'
import { Recipe } from '../../lib/types'
import css from '../pages.css'

const RecipesPage = ({ recipes }) => (
  <Layout>
    <Main>
      <Heading title='Recipes' />
      <section className={css.recipes}>
        {recipes.map(recipe => (<RecipeItem recipe={recipe} key={recipe.id} />))}
      </section>
    </Main>
  </Layout>
)

RecipesPage.propTypes = {
  recipes: PropTypes.arrayOf(Recipe)
}

export default RecipesPage
