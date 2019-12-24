import React, { Fragment } from 'react'
import Layout, { Main } from '../../components/Layout'
import Heading from '../../components/Heading'
import { Recipe } from '../../lib/types'

const generateNode = (id, num) => (
  <Fragment key={`${id}-${num}`}>
    <p>
      Bacon ipsum dolor amet turducken doner shankle pancetta, pastrami bresaola
      fatback pig ball tip. Swine picanha bacon shank pork chop turducken tail
      tongue pork loin burgdoggen. Biltong pork belly meatloaf ham, chicken bacon
      drumstick alcatra shoulder strip steak. Short ribs meatloaf biltong salami.
    </p>
    <figure>
      <img src={`/images/recipes/${id}/${num}.jpg`} alt='Bacon ipsum' />
    </figure>
    {num === 2 ? <Heading level={2} title='Pastrami bresaola fatback' /> : null}
    <p>
      Biltong pork belly meatloaf ham, chicken bacon drumstick alcatra shoulder
      strip steak. Short ribs meatloaf biltong salami.Bacon ipsum dolor amet
      turducken doner shankle pancetta, pastrami bresaola fatback pig ball tip.
      Swine picanha bacon shank pork chop turducken tail tongue pork loin burgdoggen.
    </p>
  </Fragment>
)

// generate some content based on the number of images
const generateNodes = recipe => Array.from(Array(recipe.images).keys()).map(idx => generateNode(recipe.id, idx + 1))

const RecipePage = ({ recipe }) => (
  <Layout recipe={recipe}>
    <Main>
      <Heading title={recipe.title} type='deco' />
      <p>{recipe.abstract}</p>
      {generateNodes(recipe)}
    </Main>
  </Layout>
)

RecipePage.propTypes = {
  recipe: Recipe
}

export default RecipePage
