import classNames from 'classnames';
import css from './Layout.css'
import { content as contentClass } from './Content.css'

const Main = ({ children }) => (
  <main className={classNames([css.main, contentClass])}>
    {children}
  </main>
)

export default Main
