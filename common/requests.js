const baseUrl = process.env.baseUrl
const apiUrl = process.env.apiUrl
const apiToken = process.env.apiToken
const collectionName = process.env.collectionName

function getObjects() {
  return new Promise((resolve, reject) => {
    const endpoint =
      baseUrl + '/' + apiUrl + '/get/' + collectionName + '?token=' + apiToken
    fetch(endpoint, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) =>
        response.json().then((data) => {
          resolve(data)
        })
      )
      .catch((error) => {
        reject(error)
      })
  })
}

function getObjectsBy(objectsFilter) {
  return new Promise((resolve, reject) => {
    const endpoint =
      baseUrl + '/' + apiUrl + '/get/' + collectionName + '?token=' + apiToken
    fetch(endpoint, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) =>
        response.json().then((data) => {
          const filterer = data.entries[0]
          const filteredData = filterer[objectsFilter]
          resolve(filteredData)
          /*
          const dataEntries = data.entries
          for (let x = 0; x < dataEntries.length; x++) {
            if (dataEntries[x].title === filter) {
              const data = dataEntries[x]
              // eslint-disable-next-line
              console.log('data from getObjectBy request', data)
              resolve(data)
            } else {
              const data = {}
              resolve(data)
            }
          }
          */
        })
      )
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  getObjects,
  getObjectsBy,
}
