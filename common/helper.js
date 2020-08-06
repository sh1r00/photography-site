function arrayCleaner(params) {
  // eslint-disable-next-line no-console
  console.log('cleaning initiated', params)
  const cleanArray = []
  for (let x = 0; x < params.length; x++) {
    const currObj = params[x].value
    // eslint-disable-next-line no-console
    console.log('cleaning ' + currObj, currObj)
    for (const key in currObj) {
      if (
        Object.prototype.hasOwnProperty.call(currObj, key) &&
        Array.isArray(currObj[key])
      ) {
        arrayCleaner(currObj[key])
      } else {
        this.currObj = currObj[key]
      }
    }
    // eslint-disable-next-line no-console
    console.log('cleaning ' + params, cleanArray)
    return cleanArray.push(currObj)
  }
}

export default {
  arrayCleaner,
}
