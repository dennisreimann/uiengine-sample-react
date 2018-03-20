import classNames from 'classnames';
import css from './Layout.css'
import { content as contentClass } from './Content.css'

const Main = props => (
  <main className={classNames([css.main, contentClass])}>
    {props.children}
  </main>
)

export default Main
