import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './icon.css'

const Icon = props => (
  <img
    className={classNames([css.icon, props.className])}
    src={`/icons/${props.symbol}.svg`}
    alt={props.symbol}
  />
)

Icon.propTypes = {
  symbol: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Icon
