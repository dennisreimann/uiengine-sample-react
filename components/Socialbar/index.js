import Icon from '../Icon'
import css from './socialbar.css'

const SocialLink = ({ title }) => (
  <a href="#" className={css.link}>
    <Icon symbol={title.toLowerCase()} className={css.icon} />
  </a>
)

export default props => (
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
