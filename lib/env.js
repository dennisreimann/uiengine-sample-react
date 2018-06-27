export const HOST =
  typeof window !== 'undefined'
    ? window.App.HOST
    : ((process && process.env.HOST) || 'http://localhost:3000')
