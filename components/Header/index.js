import Link from 'next/link'
import Navbar from '../Navbar'
import css from './Header.css'

const Header = props => (
  <header className={css.header}>
    <Navbar className={css.navbar} />
    <Link href="/">
      <a className={css.link}>
        <div className={css.title}>Tasty BBQ</div>
        <div className={css.subtitle}>homemade • best in town • yummy</div>
      </a>
    </Link>
  </header>
)

export default Header
