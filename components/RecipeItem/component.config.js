module.exports = {
  variants: [
    {
      file: 'Default.js',
      description: 'The default recipe item should be used in overview lists.',
      context: {
        recipe: require('../../pages/api/recipes/gyros')
      }
    },
    {
      file: 'Teaser.js',
      description:
        'Use the teaser when you want to display one or a few recipes prominently, like on the homepage.',
      context: {
        recipe: require('../../pages/api/recipes/burnt-ends')
      }
    }
  ]
}
