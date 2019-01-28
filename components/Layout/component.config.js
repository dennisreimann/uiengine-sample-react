module.exports = {
  variants: [
    {
      file: 'Default.js',
      title: 'Default (without sidebar)',
      description:
        'Standard pages like the recipes list and details do not feature a sidebar.'
    },
    {
      file: 'WithSidebar.js',
      title: 'With Sidebar',
      description: 'The sidebar appears on the home and about page.'
    }
  ]
}
