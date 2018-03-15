import Link from 'next/link'
import css from './header.css'

export default () => (
  <div>
    <Link href="/">
      <a className={css.link}>Home</a>
    </Link>
    <Link href="/about">
      <a className={css.link}>About</a>
    </Link>
  </div>
)
