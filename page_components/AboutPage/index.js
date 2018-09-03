import React from 'react'
import Layout, { Main, Sidebar } from '../../components/Layout'
import Heading from '../../components/Heading'
import { APP_ROUTES } from '../../lib/routes'

const AboutPage = () => (
  <Layout>
    <Main>
      <section>
        <Heading title="About Tasty BBQ" />
        <p>
          This is a sample project to showcase the basic functionality provided by the <a href="https://github.com/dennisreimann/uiengine">UIengine</a>.
          This website is built with React and Next.js.
          Also see the <a href={APP_ROUTES.designsystem}>corresponding design system</a> documentation, built with the UIengine.
        </p>
        <p>
          You can check out the <a href="https://github.com/dennisreimann/uiengine-sample-react">source code on GitHub</a>.
        </p>
        <Heading level={2} title="Tasty information" />
        <p>
          Spicy jalapeno bacon ipsum dolor amet turducken doner shankle pancetta,
          pastrami bresaola fatback pig ball tip. Swine picanha bacon shank pork
          chop turducken tail tongue pork loin burgdoggen. Biltong pork belly
          meatloaf ham, chicken bacon drumstick alcatra shoulder strip steak.
          Short ribs meatloaf biltong salami.
        </p>
        <p>
          Ribeye pig andouille tenderloin, kielbasa hamburger leberkas ham hock jowl
          spare ribs chuck pork loin venison kevin shoulder. Alcatra cupim bresaola
          tenderloin. Ribeye turducken tongue jowl, brisket t-bone biltong cupim
          pancetta landjaeger shankle salami beef meatloaf buffalo. Spare ribs meatball
          bacon, shankle ribeye porchetta frankfurter sausage biltong turkey pork chop
          leberkas alcatra pork tenderloin. Venison tenderloin fatback, jowl ball tip
          chuck ground round. Turducken venison bresaola, shankle strip steak buffalo
          doner biltong short loin. Venison andouille chicken boudin pancetta tenderloin
          salami rump cupim.
        </p>
        <p>
          Pork belly frankfurter short loin tenderloin burgdoggen venison. Pork loin pork
          meatloaf short loin bacon. Capicola bacon short ribs jowl. Pork corned beef
          brisket venison, filet mignon tongue ham leberkas chuck short ribs short loin
          ground round shankle.
        </p>
        <p>
          Buffalo leberkas meatloaf tongue, chuck brisket drumstick picanha biltong
          pastrami rump hamburger sausage prosciutto ham hock. Meatloaf picanha pig,
          beef ribs venison shankle shank ham hock kielbasa boudin burgdoggen salami.
          Kielbasa meatball shankle tongue. Frankfurter pork loin tongue turkey. Hamburger
          turkey venison, chuck sausage leberkas flank jowl tenderloin shankle ball tip
          turducken pork chop salami rump. Strip steak bacon chicken t-bone alcatra.
          Jowl tongue sausage capicola beef, fatback ball tip ham hock pancetta
          burgdoggen buffalo shoulder kielbasa turkey.
        </p>
        <p>
          Landjaeger pancetta turducken, meatloaf sirloin ball tip shank chuck swine.
          Boudin pork chop sausage corned beef. Beef ribs bacon buffalo sausage pork
          chop pig. Ribeye shoulder cow shankle venison salami prosciutto tongue.
          Beef ribs picanha pig chuck ball tip pork chop, hamburger shoulder. Brisket
          shankle cow meatloaf ball tip turducken. Doner t-bone drumstick bacon,
          frankfurter tenderloin kielbasa.
        </p>
      </section>
    </Main>

    <Sidebar />
  </Layout>
)

export default AboutPage
