const classNames = names => names.filter(name => !!name).join(' ')

const backgroundImage = recipe => {
  const imgPath = recipe && recipe.id ? `recipes/${recipe.id}/` : ''

  return `url(/images/${imgPath}hero.jpg)`
}

const heroHeight = recipe => recipe && recipe.id ? '400px' : '200px'

module.exports = {
  classNames,
  backgroundImage,
  heroHeight
}
