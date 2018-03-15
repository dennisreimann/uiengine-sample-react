import { withRouter } from 'next/router'
import { classNames } from '../../lib/util'
import Link from 'next/link'
import css from './navbar.css'

const routes = {
  home: '/',
  recipes: '/recipes',
  about: '/about'
}

const NavLink = withRouter(({ router, route, title }) => {
  const activeClass = router.pathname === route ? css.linkActive : null
  const classes = classNames([css.link, activeClass])

  return (
    <Link href={route}>
      <a className={classes}>{title}</a>
    </Link>
  )
})

export default props => (
  <nav className={classNames([css.navbar, props.className])}>
    <div className={css.wrap}>
      <NavLink route={routes.home} title="Home" />
      <NavLink route={routes.recipes} title="Recipes" />
      <NavLink route={routes.about} title="About" />
    </div>
  </nav>
)
