import PropTypes from 'prop-types'
import classNames from 'classnames'
import Heading from '../Heading'
import css from './Panel.css'
import { content as contentClass } from '../Layout/Content.css'

const Panel = props => (
  <div className={classNames([css.panel, contentClass, props.className])}>
    <Heading title={props.title} level={3} type='deco' />
    {props.children}
  </div>
)

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Panel
