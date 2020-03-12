const apiKey = process.env.REACT_APP_API_KEY
const accessToken = process.env.REACT_APP_API_BEARER_TOKEN
const accountId = process.env.REACT_APP_API_ACCOUNTID

const getImage = (imagePath) => {
  return `https://image.tmdb.org/t/p/w500/${imagePath}`
}

function parseLists (list) {
  return {
    id: list.id,
    description: list.description,
    name: list.name,
    image: getImage(list.backdrop_path)
  }
}

function parseListItems (listItem) {
  return {
    id: listItem.id,
    originalName: listItem.original_name,
    overview: listItem.overview,
    image: getImage(listItem.backdrop_path)

  }
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`)
    error.status = response.statusText
    error.response = response
    console.log('Error communicating with Spotify:')
    console.log(error)
    throw error
  }
}

function parseJson (response) {
  return response.json()
}

const TmdbClient = {

  getLists () {
    return fetch(`https://api.themoviedb.org/4/account/${accountId}/lists`,
      {
        method: 'get',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(checkStatus)
      .then(parseJson)
      .then((data) => (data.results.map((l) => parseLists(l))))
  },

  getListItem (listId) {
    return fetch(`https://api.themoviedb.org/4/list/${listId}?api_key=${apiKey}`,
      {
        method: 'get',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(checkStatus)
      .then(parseJson)
      .then((data) => data.results.map((i) => parseListItems((i))))
  }
}

export default TmdbClient
