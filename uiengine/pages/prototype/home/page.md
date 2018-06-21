---
template: Home.js

context:
  title: Home
  class: uie-page uie-page--home
  recipes:
    - !data /recipes/bacon-wrapped-chicken-breasts.json
    - !data /recipes/beer-can-chicken.json
    - !data /recipes/burgers.json
    - !data /recipes/burnt-ends.json
    - !data /recipes/gyros.json
    - !data /recipes/nacho-salad.json
    - !data /recipes/onion-moinkballs.json
    - !data /recipes/porterhouse-steak.json

properties:
  <Homepage recipes={recipes} />:
    recipes:
      type: '[Recipe]'
---
The home page features some teasers and information.
