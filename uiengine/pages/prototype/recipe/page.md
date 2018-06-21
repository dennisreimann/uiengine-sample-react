---
template: Recipe.js

context:
  title: Recipes
  class: uie-page uie-page--recipe
  recipe: !data /recipes/porterhouse-steak.json

properties:
  <Recipe recipe={recipe} />:
    recipe:
      type: Recipe
---
The detail page shows the information about a specific recipe.
