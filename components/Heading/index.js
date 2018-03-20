import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import css from './Heading.css'

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
  type: PropTypes.oneOf(['title', 'deco']),
  className: PropTypes.string
}

export default Heading
