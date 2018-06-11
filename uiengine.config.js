module.exports = {
  // Project config: Defaults to name and version from package.json.
  // Here you can overwrite it and add more custom properties.
  // For a detailed documentation of all the options in here see
  // https://github.com/dennisreimann/uiengine/blob/master/docs/config.md
  name: 'Tasty BBQ',
  copyright: 'Copyright © Dennis Reimann. <a href="https://github.com/dennisreimann/uiengine">Generated with UIengine</a>.',
  debug: true,

  // Base directories for the input, your raw source files:
  // - components is the root of the directory containing the components
  // - templates contains the variant preview and application templates
  // - pages is the directory of the UIengine's site structure and page markdown files
  // - data contains sample data that can be referenced in variants and pages
  // - entities contains the optional entity definitions for the components
  source: {
    components: './components',
    templates: './templates',
    pages: './uiengine/pages',
    entities: './uiengine/entities',
    data: './static/api'
  },

  // Destination paths for the generated output.
  target: './dist/uiengine',

  // Adapters are used for templating/rendering. Each adapter is a module that gets required
  // and needs to provide functions for setup and rendering. For details see the adapters docs.
  adapters: {
    html: '@uiengine/adapter-html',
    css: './lib/uiengine/css.js',
    js: './lib/uiengine/react.js'
  },

  // Here you can configure the template that the variant preview gets embeded in.
  template: 'uiengine.html',

  ui: {
    lang: 'en',
    hljs: 'gruvbox-dark',
    customStylesFile: '/static/styles/uiengine-customizations.css',
    breakpoints: {
      S: 360,
      M: 640,
      L: 960,
      XL: 1280
    }
  },

  browserSync: {
    port: 4000,
    open: false,
    serveStatic: [{
      route: '/static',
      dir: ['./static', './dist/static']
    }]
  }
}
