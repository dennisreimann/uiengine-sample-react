const ReactAdapter = require('@uiengine/adapter-react')
const { readFileSync } = require('fs')
const { resolve, join } = require('path')
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

// wrap all templates in the preview templates to provide the full html page.
const templatesPath = resolve(__dirname, '..', '..', 'templates')
const templatePath = join(templatesPath, 'uiengine.html')
const template = readFileSync(templatePath, 'utf-8')

ReactAdapter.wrapHtmlAfterRender = (html, filePath, data) => {
  if (filePath.startsWith(templatesPath)) {
    let wrapped = template
    wrapped = wrapped.replace(`<!-- uiengine:class -->`, data.class)
    wrapped = wrapped.replace(`<!-- uiengine:title -->`, data.title)
    wrapped = wrapped.replace(`<!-- uiengine:content -->`, html)
    return wrapped
  } else {
    return html
  }
}

module.exports = ReactAdapter
