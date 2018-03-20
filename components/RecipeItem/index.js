import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Link from 'next/link'
import Heading from '../Heading'
import css from './RecipeItem.css'

const cx = classNames.bind(css)

const RecipeItem = props => {
  const { recipe, teaser } = props
  const className = cx(['recipeItem', { recipeItemAsTeaser: teaser }])

  return (
    <div className={className}>
      <Link as={`/recipes/${recipe.id}`} href={`/recipes?id=${recipe.id}`}>
        <a className={css.link}>
          <Heading title={recipe.title} level={3} className={css.heading} />
          <img src={`/static/images/recipes/${recipe.id}/preview.jpg`} className={css.preview} />
        </a>
      </Link>
      <p className={css.abstract}>{recipe.abstract}</p>
    </div>
  )
}

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
}

export default RecipeItem