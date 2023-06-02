import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE = 'https://cataas.com/cat/says/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const App = () => {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeWords = fact.split(' ').slice(0, 3).join(' ')

        const endpoint = `${CAT_ENDPOINT_IMAGE}${threeWords}?size=50&color=black&json=true`

        fetch(endpoint)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            console.log({ response })
            setImageURL(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>Api de Gatos</h1>
      {
        fact && <p>{fact}</p>
      }
      {
        imageURL &&
        (
          <picture>
            <img src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`} alt={`Imagen extrated using the first three words for ${fact}`} title={`Imagen extrated using the first three words for ${fact}`} />
          </picture>
        )
      }
    </main>
  )
}
