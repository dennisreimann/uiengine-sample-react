import Header from '../Header'
import Heading from '../Heading'
import Socialbar from '../Socialbar'
import Footer from '../Footer'
import css from './Layout.css'

const Layout = props => (
  <div className={css.layout}>
    <Header />
    <main className={css.main}>
      {props.children}
    </main>
    <Socialbar />
    <Footer />
  </div>
)

export default Layout
