module.exports = {
  tokens: [
    {
      name: 'Head',
      type: 'category',
      tokens: [
        {
          type: 'font',
          name: 'Sanelma',
          fontweight: 'regular / 400',
          license: 'Mika Melvas - Standard License',
          variable: 'var(--font-family-head)',
          value: 'font-family: var(--font-family-head);',
          sizes: ['5rem']
        }
      ]
    },
    {
      name: 'Deco',
      type: 'category',
      tokens: [
        {
          type: 'font',
          name: 'PH 1000 Regular',
          fontweight: 'regular / 400',
          variable: 'var(--font-family-deco)',
          value: 'font-family: var(--font-family-deco);',
          sizes: ['2rem']
        }
      ]
    },
    {
      name: 'Base',
      type: 'category',
      tokens: [
        {
          type: 'font',
          name: 'Helvetica, Arial, Tahoma, Verdana',
          fontweight: 'regular / 400',
          variable: 'var(--font-family-base)',
          value: 'font-family: var(--font-family-base);',
          sizes: ['24px', '21px', '14px', '11px', '9px']
        }
      ]
    }
  ]
}
