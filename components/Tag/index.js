import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './Tag.css'

const Tag = props => (
  <a href="#" className={classNames([css.tag, props.className])}>
    {props.title}
  </a>
)

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Tag
