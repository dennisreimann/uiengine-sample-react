---
template: Recipe.js
wrapTemplate: true

context:
  recipe: !data /recipes/porterhouse-steak.json

properties:
  <Recipe recipe={recipe} />:
    recipe:
      type: Recipe
---
The detail page shows the information about a specific recipe.
