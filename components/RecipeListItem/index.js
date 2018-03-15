import Link from 'next/link'
import Heading from '../Heading'
import css from './recipe_list_item.css'

export default ({ recipe }) => (
  <div className={css.recipe}>
    <Link as={`/recipes/${recipe.id}`} href={`/recipes?id=${recipe.id}`}>
      <a>
        <Heading title={recipe.title} level="2" />
        <br />
        <img src={`/static/images/recipes/${recipe.id}/preview.jpg`} />
      </a>
    </Link>
  </div>
)
