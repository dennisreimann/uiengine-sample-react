import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Main from './Main'
import Sidebar from './Sidebar'
import Socialbar from '../Socialbar'
import Footer from '../Footer'
import css from './Layout.css'

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
  children: PropTypes.oneOfType([
    PropTypes.objectOf(Main),
    PropTypes.arrayOf(
      PropTypes.objectOf(Main),
      PropTypes.objectOf(Sidebar)
    )
  ]),
  recipe: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  })
}

export default Layout
