const baseUrl = process.env.BASE_URL
const apiUrl = process.env.API_URL
const apiToken = process.env.API_TOKEN
const collectionName = process.env.COLLECTION_NAME

function getObjects() {
  return new Promise((resolve, reject) => {
    const endpoint =
      baseUrl + '/' + apiUrl + '/get/' + collectionName + '?token=' + apiToken
    fetch(endpoint, {
      method: 'get',
      mode: 'cors',
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
      mode: 'cors',
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
