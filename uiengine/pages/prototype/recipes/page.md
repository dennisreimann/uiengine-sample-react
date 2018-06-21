---
template: Recipes.js

context:
  title: Recipes
  class: uie-page uie-page--recipes
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
  <Recipes recipes={recipes} />:
    recipes:
      type: '[Recipe]'
---
This page features an overview of our favorite recipes.
