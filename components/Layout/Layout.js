import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Socialbar from '../Socialbar'
import Footer from '../Footer'
import css from './Layout.css'
import { Recipe } from '../../lib/types'

const Layout = ({ children, recipe }) => (
  <Fragment>
    <Header className={css.header} recipe={recipe} />
    <div className={css.wrap}>
      {children}
    </div>
    <Socialbar recipe={recipe} />
    <Footer className={css.footer} />
  </Fragment>
)

Layout.propTypes = {
  recipe: Recipe,
  /**
   * At least a `Main` component, can also be supplemented with an optional `Sidebar` component.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
}

export default Layout
