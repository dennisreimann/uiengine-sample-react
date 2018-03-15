import css from './heading.css'

const createTag = (level = 1) => `h${level}`

export default props => {
  const Tag = createTag(props.level)

  return (
    <Tag className={css.heading}>
      {props.title}
    </Tag>
  )
}
