import Link from 'next/link'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Navbar from '../Navbar'
import css from './Header.css'

const Header = props => (
  <header className={classNames([css.header, props.className])}>
    <Navbar className={css.navbar} />
    <Link href="/">
      <a className={css.link}>
        <div className={css.title}>Tasty BBQ</div>
        <div className={css.subtitle}>homemade • best in town • yummy</div>
      </a>
    </Link>
  </header>
)

Header.propTypes = {
  className: PropTypes.string
}

export default Header
