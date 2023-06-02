const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE = 'https://cataas.com/cat/says/'

export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}

export const getImage = (filter) => {
  const endpoint = `${CAT_ENDPOINT_IMAGE}${filter}?size=50&color=black&json=true`
  console.log(endpoint)
  return fetch(endpoint)
    .then(res => res.json())
    .then(response => {
      const { url } = response
      return url
    })
}
