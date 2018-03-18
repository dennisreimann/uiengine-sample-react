import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { withRouter } from 'next/router'
import Link from 'next/link'
import css from './Navbar.css'

const routes = {
  home: '/',
  recipes: '/recipes',
  about: '/about'
}

const cx = classNames.bind(css)

const NavLink = withRouter(({ router, route, title }) => {
  const isActive = router.pathname === route
  const className = cx(['link', { linkActive: isActive }])

  return (
    <Link href={route}>
      <a className={className}>{title}</a>
    </Link>
  )
})

NavLink.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

const Navbar = props => (
  <nav className={classNames([css.navbar, props.className])}>
    <div className={css.wrap}>
      <NavLink route={routes.home} title="Home" />
      <NavLink route={routes.recipes} title="Recipes" />
      <NavLink route={routes.about} title="About" />
    </div>
  </nav>
)

Navbar.propTypes = {
  className: PropTypes.string
}

export default Navbar
