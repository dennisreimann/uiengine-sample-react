module.exports = {
  title: 'Recipes',
  context: {
    title: 'Recipes',
    class: 'uie-page uie-page--recipes',
    recipes: [
      require('../../pages/api/recipes/bacon-wrapped-chicken-breasts'),
      require('../../pages/api/recipes/beer-can-chicken'),
      require('../../pages/api/recipes/burgers'),
      require('../../pages/api/recipes/burnt-ends'),
      require('../../pages/api/recipes/gyros'),
      require('../../pages/api/recipes/nacho-salad'),
      require('../../pages/api/recipes/onion-moinkballs'),
      require('../../pages/api/recipes/porterhouse-steak')
    ]
  }
}
