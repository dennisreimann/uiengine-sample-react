const upcaseFirstChar = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

// creates an additional CSS file for every component
const filesForComponent = (options, componentName) =>
  [
    {
      basename: `${upcaseFirstChar(componentName)}.css`,
      data: '/* TODO: Implement */\n'
    }
  ]

module.exports = {
  filesForComponent
}
