import { classNames } from '../../lib/util'
import css from './icon.css'

export default props => (
  <img
    className={classNames([css.icon, props.className])}
    src={`/static/icons/${props.symbol}.svg`}
    alt={props.symbol}
  />
)
