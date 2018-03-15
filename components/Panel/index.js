import Heading from '../Heading'
import { classNames } from '../../lib/util'
import css from './panel.css'

export default props => (
  <div className={classNames([css.panel, props.className])}>
    <Heading level="3" title={props.title} deco={true} />
    {props.children}
  </div>
)
