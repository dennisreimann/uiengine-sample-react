import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import css from './heading.css'

const cx = classNames.bind(css)

const createTag = (level = 1) => `h${level}`

const Heading = props => {
  const Tag = createTag(props.level)
  const className = cx(['heading', props.type, props.className])

  return (
    <Tag className={className}>
      <span>{props.title}</span>
    </Tag>
  )
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number,
  /**
   * Can be blank, 'title' or 'deco'
   */
  type: PropTypes.string,
  className: PropTypes.string
}

Heading.defaultProps = {
  level: 1
}

export default Heading
