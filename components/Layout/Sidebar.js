import Heading from '../Heading'
import Panel from '../Panel'
import css from './Layout.css'
import { content as contentClass } from './Content.css'

const Sidebar = props => (
  <aside className={css.sidebar}>
    <Panel title="Opening Hours" className={css.panel}>
      <p>
        <strong>Mon – Wed</strong> 8 am – 10 pm
        <br />
        <strong>Thur – Fri</strong> 9 am – 10 pm
        <br />
        <strong>Sat – Sun</strong> 10 am – 6 pm
      </p>
    </Panel>

    <Panel title="In the loop" className={css.panel}>
      <p>
        Join our exclusive mailinglist to get updates and
        information regarding our menus!
      </p>
    </Panel>

    {props.children}
  </aside>
)

export default Sidebar
