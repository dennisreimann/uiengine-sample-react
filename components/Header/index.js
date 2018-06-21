import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Navbar from '../Navbar'
import css from './Header.css'
import { Recipe } from '../../lib/types'
import { backgroundImage, heroHeight } from '../../lib/util'

const Title = ({ recipe }) => {
  const title = recipe && recipe.title || 'Tasty BBQ'
  const subtitle = recipe && recipe.subtitle || 'homemade • best in town • yummy'

  return (
    <Link href="/">
      <a className={css.link}>
        <div className={css.title}>{title}</div>
        <div className={css.subtitle}>{subtitle}</div>
      </a>
    </Link>
  )
}

Title.propTypes = {
  recipe: Recipe
}

const Header = ({ className, recipe }) => {
  const style = {
    height: heroHeight(recipe),
    backgroundImage: backgroundImage(recipe)
  }

  return (
    <header className={classNames([css.header, className])} style={style}>
      <Navbar className={css.navbar} />
      <Title recipe={recipe} />
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  recipe: Recipe
}

export default Header
