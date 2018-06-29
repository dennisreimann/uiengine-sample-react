import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Panel from '../Panel'
import Tag from '../Tag'
import css from './footer.css'

const Footer = ({ className }) => (
  <footer className={classNames([css.footer, className])}>
    <div className={classNames([css.panels, css.wrap])}>
      <Panel title="Tags" className={css.panel}>
        <div className={css.tags}>
          <Tag className={css.tag} title="BBQ" />
          <Tag className={css.tag} title="Chicken" />
          <Tag className={css.tag} title="Pork" />
          <Tag className={css.tag} title="Beef" />
          <Tag className={css.tag} title="Steak" />
          <Tag className={css.tag} title="Burger" />
          <Tag className={css.tag} title="Fish" />
          <Tag className={css.tag} title="Dessert" />
          <Tag className={css.tag} title="Sauces" />
          <Tag className={css.tag} title="Bacon" />
          <Tag className={css.tag} title="Dry Aged" />
        </div>
      </Panel>

      <Panel title="Friends" className={css.panel}>
        <p>These are some sites you don't want to miss. Go visit my friends:</p>
        <ul className={css.friends}>
          <li><a href="#">Old Tom's Greasy BBQ</a></li>
          <li><a href="#">Backyard Barbequers</a></li>
          <li><a href="#">Meat Feast by Don Hermillo</a></li>
          <li><a href="#">Hot Sauce &amp; Seasonings</a></li>
        </ul>
      </Panel>
    </div>

    <p className={css.copyright}>&copy; Tasty BBQ by UIengine 2018</p>
  </footer>
)

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
