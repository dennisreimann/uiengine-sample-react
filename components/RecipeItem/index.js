import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Link from 'next/link'
import Heading from '../Heading'
import { Recipe } from '../../lib/types'
import css from './recipeitem.css'

const cx = classNames.bind(css)

const RecipeItem = props => {
  const { recipe, teaser } = props
  const className = cx([{ recipeItem: !teaser }, { recipeTeaser: teaser }])
  const href = recipe.url || `/recipe?id=${recipe.id}`
  const previewSrc = recipe.previewUrl || `/images/recipes/${recipe.id}/preview.jpg`

  return (
    <div className={className}>
      <Link href={href} as={`/recipes/${recipe.id}`}>
        <a className={css.link}>
          <Heading title={recipe.title} level={3} className={css.heading} />
          <img src={previewSrc} className={css.preview} />
        </a>
      </Link>
      <p className={css.abstract}>
        {recipe.abstract}
      </p>
    </div>
  )
}

RecipeItem.propTypes = {
  recipe: Recipe,
  isTeaser: PropTypes.bool
}

RecipeItem.defaultProps = {
  isTeaser: false
}

export default RecipeItem
