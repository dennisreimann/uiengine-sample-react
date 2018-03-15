import Header from '../Header'
import Heading from '../Heading'
import css from './layout.css'

export default props => (
  <div className={css.layout}>
    <Header />
    {props.children}
  </div>
)
