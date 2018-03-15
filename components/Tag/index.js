import css from './tag.css'
import { classNames } from '../../lib/util'

export default props => (
  <a href="#" className={classNames([css.tag, props.className])}>
    {props.title}
  </a>
)
