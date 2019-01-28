module.exports = {
  tokens: [
    {
      name: 'Brand',
      type: 'category',
      tokens: [
        {
          type: 'color',
          name: 'Brown',
          value: '#583f48',
          variable: 'var(--color-brown)'
        },
        {
          type: 'color',
          name: 'Orange',
          value: '#ff9160',
          variable: 'var(--color-orange)'
        }
      ]
    },
    {
      name: 'Neutral',
      type: 'category',
      tokens: [
        {
          type: 'color',
          name: 'White',
          value: '#fff',
          variable: 'var(--color-white)'
        },
        {
          type: 'color',
          name: 'Gray 10',
          value: '#ebebeb',
          variable: 'var(--color-gray-10)'
        },
        {
          type: 'color',
          name: 'Gray 20',
          value: '#dedcdc',
          variable: 'var(--color-gray-20)'
        }
      ]
    }
  ]
}
