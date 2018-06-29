import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { Recipe } from '../../lib/types'
import { backgroundImage } from '../../lib/util'
import css from './socialbar.css'

const SocialLink = ({ title }) => (
  <a href="#" className={css.link}>
    <Icon symbol={title.toLowerCase()} className={css.icon} />
  </a>
)

SocialLink.propTypes = {
  title: PropTypes.string.isRequired
}

const SocialBar = ({ recipe }) => {
  const style = {
    backgroundImage: backgroundImage(recipe)
  }

  return (
    <div className={css.socialbar} style={style}>
      <div className={css.wrap}>
        <SocialLink title="Instagram" />
        <SocialLink title="Facebook" />
        <SocialLink title="Twitter" />
        <SocialLink title="YouTube" />
        <SocialLink title="RSS" />
      </div>
    </div>
  )
}

SocialBar.propTypes = {
  recipe: Recipe
}

export default SocialBar
