const APP_HOST =
  typeof window !== 'undefined'
    ? window.App.HOST
    : ((process && process.env.HOST) || 'http://localhost:3000')

const UIE_HOST =
  typeof process !== 'undefined' && process.env.HOST
    ? ''
    : 'http://localhost:4000'

module.exports = {
  APP_HOST,
  UIE_HOST
}
