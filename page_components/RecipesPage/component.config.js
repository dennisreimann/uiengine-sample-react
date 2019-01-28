module.exports = {
  title: 'Recipes',
  context: {
    title: 'Recipes',
    class: 'uie-page uie-page--recipes',
    recipes: [
      require('../../static/api/recipes/bacon-wrapped-chicken-breasts'),
      require('../../static/api/recipes/beer-can-chicken'),
      require('../../static/api/recipes/burgers'),
      require('../../static/api/recipes/burnt-ends'),
      require('../../static/api/recipes/gyros'),
      require('../../static/api/recipes/nacho-salad'),
      require('../../static/api/recipes/onion-moinkballs'),
      require('../../static/api/recipes/porterhouse-steak')
    ]
  }
}
