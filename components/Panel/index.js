import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Heading from '../Heading'
import css from './Panel.css'
import { content as contentClass } from '../Layout/Content.css'

const Panel = ({ children, className, title }) => (
  <div className={classNames([css.panel, contentClass, className])}>
    <Heading title={title} level={3} type='deco' />
    {children}
  </div>
)

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Panel
