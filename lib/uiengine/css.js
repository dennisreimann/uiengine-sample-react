const upcaseFirstChar = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// creates an additional CSS file for every component
const filesForComponent = componentName => {
  const name = upcaseFirstChar(componentName)

  return [
    {
      basename: `${name}.css`,
      data: '/* TODO: Implement */\n'
    }
  ]
}

module.exports = {
  filesForComponent
}
