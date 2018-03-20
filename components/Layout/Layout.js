import { Fragment } from 'react'
import Header from '../Header'
import Heading from '../Heading'
import Socialbar from '../Socialbar'
import Footer from '../Footer'
import css from './Layout.css'

const Layout = props => (
  <Fragment>
    <Header className={css.header} />
    <div className={css.wrap}>
      {props.children}
    </div>
    <Socialbar />
    <Footer className={css.footer} />
  </Fragment>
)

export default Layout
