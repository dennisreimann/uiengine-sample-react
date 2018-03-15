import { classNames } from '../../lib/util'
import css from './heading.css'

const createTag = (level = 1) => `h${level}`

export default props => {
  const Tag = createTag(props.level)
  const decoClass = props.deco ? css.deco : null

  return (
    <Tag className={classNames([css.heading, decoClass])}>
      <span>{props.title}</span>
    </Tag>
  )
}
