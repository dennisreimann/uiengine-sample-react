const ReactAdapter = require('@uiengine/adapter-react')
const { createElement } = require('react')
const { RoutesContext, UIENGINE_ROUTES } = require('../routes')

// wrap all components and templates in a routes context provider.
// this way we avoid referencing it manually everywhere.
ReactAdapter.wrapElementBeforeRender = (Element, filePath, data) => {
  return (props, children) =>
    createElement(RoutesContext.Provider, {
      value: UIENGINE_ROUTES,
      children: createElement(Element, props, children)
    })
}

module.exports = ReactAdapter
