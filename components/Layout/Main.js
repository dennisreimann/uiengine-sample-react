import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import css from './layout.css'
import { content as contentClass } from './content.css'

const Main = ({ children }) => (
  <main className={classNames([css.main, contentClass])}>
    {children}
  </main>
)

Main.propTypes = {
  /**
   * The main page content.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
}

export default Main
