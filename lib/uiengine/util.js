// invalidate require cache so we get template updates as well
const invalidateModuleCache = modulePath => {
  const module = require.resolve(modulePath)

  if (require.cache[module]) {
    delete require.cache[module]
  }
}

const invalidateModulesCache = basePath => {
  Object.keys(require.cache).forEach(modulePath => {
    if (modulePath.startsWith(basePath)) {
      invalidateModuleCache(modulePath)
    }
  })
}

const upcaseFirstChar = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = {
  invalidateModuleCache,
  invalidateModulesCache,
  upcaseFirstChar
}
