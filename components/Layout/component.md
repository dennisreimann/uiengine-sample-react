---
variants:
- file: Default.js
  title: Default (without sidebar)
  description: Standard pages like the recipes list and details do not feature a sidebar.
- file: WithSidebar.js
  title: With Sidebar
  description: The sidebar appears on the home and about page.

properties:
  <Layout recipe={recipe}>{children}</Layout>:
    children:
      type: HTML
      required: true
      description: At least a `Main` component, can also be supplemented with an optional `Sidebar` component.
    recipe:
      type: Recipe

  <Main>{children}</Main>:
    children:
      type: HTML
      required: true
      description: The main page content.

  <Sidebar>{children}</Sidebar>:
    children:
      type: HTML
      required: true
      description: The children will be displayed beneath the sidebars default content.
---
The `Layout` component provides the basic page structure.
It receives the main content as `children` and wraps it inside a basic layout with `Header`, `Socialbar` and `Footer`.

Part of the layout are also the components `Main` and `Sidebar`, which wrap the particular content components.
