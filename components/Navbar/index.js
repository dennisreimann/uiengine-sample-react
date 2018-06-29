import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { RoutesContext } from '../../lib/routes'
import { withRouter } from 'next/router'
import Link from 'next/link'
import css from './navbar.css'

const cx = classNames.bind(css)

const NavLink = withRouter(
  ({ router, route, title }) => (
    <RoutesContext.Consumer>
      {routes => {
        const { recipes } = routes
        const isActive = router && (router.pathname === route || (route === recipes && router.pathname.startsWith(routes.recipe)))
        const className = cx(['link', { linkActive: isActive }])

        return (
          <Link href={route}>
            <a className={className}>{title}</a>
          </Link>
        )
      }}
    </RoutesContext.Consumer>
  )
)

NavLink.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

const Navbar = ({ className }) => (
  <nav className={classNames([css.navbar, className])}>
    <RoutesContext.Consumer>
      {routes => (
        <div className={css.wrap}>
          <NavLink route={routes.home} title="Home" />
          <NavLink route={routes.recipes} title="Recipes" />
          <NavLink route={routes.about} title="About" />
        </div>
      )}
    </RoutesContext.Consumer>
  </nav>
)

Navbar.propTypes = {
  className: PropTypes.string
}

export default Navbar
