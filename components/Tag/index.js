import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './tag.css'

const Tag = props => (
  <a href={props.href} className={classNames([css.tag, props.className])}>
    {props.title}
  </a>
)

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
}

Tag.defaultProps = {
  href: '#'
}

export default Tag
