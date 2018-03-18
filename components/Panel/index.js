import PropTypes from 'prop-types'
import classNames from 'classnames'
import Heading from '../Heading'
import css from './Panel.css'

const Panel = props => (
  <div className={classNames([css.panel, props.className])}>
    <Heading level={3} title={props.title} deco={true} />
    {props.children}
  </div>
)

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Panel
