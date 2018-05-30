const classNames = names => names.filter(name => !!name).join(' ')

const backgroundImage = recipe => {
  const imgPath = recipe && recipe.id ? `recipes/${recipe.id}/` : ''

  return `url(/static/images/${imgPath}hero.jpg)`
}

const heroHeight = recipe => recipe && recipe.id ? '80vh' : '30vh'

const recipeIds = [
  'burgers',
  'nacho-salad',
  'gyros',
  'burnt-ends',
  'porterhouse-steak',
  'beer-can-chicken',
  'onion-moinkballs',
  'bacon-wrapped-chicken-breasts'
]

module.exports = {
  classNames,
  backgroundImage,
  heroHeight,
  recipeIds
}
