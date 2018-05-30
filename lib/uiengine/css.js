const { dirname } = require('path')
const { upcaseFirstChar } = require('./util')

// creates an additional CSS file for every component
const filesForComponent = (componentName) => {
  const name = upcaseFirstChar(componentName)

  return [
    {
      basename: `${name}.css`,
      data: '// TODO: Implement\n'
    }
  ]
}

module.exports = {
  filesForComponent
}
