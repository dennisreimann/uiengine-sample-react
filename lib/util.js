export const classNames = names => names.filter(name => !!name).join(' ')

export const backgroundImage = recipe => {
  const imgPath = recipe && recipe.id ? `recipes/${recipe.id}/` : ''

  return `url(/static/images/${imgPath}hero.jpg)`
}

export const heroHeight = recipe => recipe && recipe.id ? '80vh' : '30vh'
