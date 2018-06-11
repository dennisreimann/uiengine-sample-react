---
properties:
  <RecipeItem recipe={recipe} teaser={isTeaser}>:
    recipe:
      type: Recipe
      required: true
    isTeaser:
      type: Boolean
      default: false
variants:
- file: Default.js
  description: The default recipe item should be used in overview lists.
  context:
    recipe: !data /recipes/gyros.json
- file: Teaser.js
  description: Use the teaser when you want to display one or a few recipes prominently, like on the homepage.
  context:
    recipe: !data /recipes/burnt-ends.json
---
The `RecipeItem` provides a quick impression of a recipe.
There are two different visual representations: The default list view and the teaser.
