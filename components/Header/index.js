import Link from 'next/link'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Navbar from '../Navbar'
import css from './Header.css'
import { backgroundImage, heroHeight } from '../../lib/util'

const Title = ({ recipe }) => (
  <Link href="/">
    <a className={css.link}>
      <div className={css.title}>Tasty BBQ</div>
      <div className={css.subtitle}>homemade • best in town • yummy</div>
    </a>
  </Link>
)

Title.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  })
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
  recipe: Title.propTypes.recipe
}

export default Header
