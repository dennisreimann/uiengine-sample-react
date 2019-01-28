import React from 'react'
import PropTypes from 'prop-types'
import Panel from '../Panel'
import css from './layout.css'

const Sidebar = ({ children }) => (
  <aside className={css.sidebar}>
    <Panel title='Opening Hours' className={css.panel}>
      <p>
        <strong>Mon – Wed</strong> 8 am – 10 pm
        <br />
        <strong>Thur – Fri</strong> 9 am – 10 pm
        <br />
        <strong>Sat – Sun</strong> 10 am – 6 pm
      </p>
    </Panel>

    <Panel title='In the loop' className={css.panel}>
      <p>
        Join our exclusive mailinglist to get updates and
        information regarding our menus!
      </p>
    </Panel>

    {children}
  </aside>
)

Sidebar.propTypes = {
  /**
   * The children will be displayed beneath the sidebars default content.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Sidebar
