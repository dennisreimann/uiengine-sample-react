import PropTypes from 'prop-types'
import Icon from '../Icon'
import css from './Socialbar.css'

const SocialLink = ({ title }) => (
  <a href="#" className={css.link}>
    <Icon symbol={title.toLowerCase()} className={css.icon} />
  </a>
)

SocialLink.propTypes = {
  title: PropTypes.string.isRequired
}

const SocialBar = props => (
  <div className={css.socialbar}>
    <div className={css.wrap}>
      <SocialLink title="Instagram" />
      <SocialLink title="Facebook" />
      <SocialLink title="Twitter" />
      <SocialLink title="YouTube" />
      <SocialLink title="RSS" />
    </div>
  </div>
)

export default SocialBar
