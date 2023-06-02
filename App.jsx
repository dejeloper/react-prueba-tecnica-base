import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'

const CAT_ENDPOINT_IMAGE = 'https://cataas.com/cat/says/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const App = () => {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  const getFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(() => {
    getFact()
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeWords = fact.split(' ').slice(0, 3).join(' ')
    const endpoint = `${CAT_ENDPOINT_IMAGE}${threeWords}?size=50&color=black&json=true`

    fetch(endpoint)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageURL(url)
      })
  }, [fact])

  const handlerClick = () => {
    getFact()
  }

  return (
    <main>
      <h1>Api de Gatos</h1>
      <button onClick={handlerClick}>Obtener nuevo texto</button>
      <section>
        {fact && <p>{fact}</p>}
        {
          imageURL &&
          (
            <picture>
              <img src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`} alt={`Imagen extrated using the first three words for ${fact}`} title={`Imagen extrated using the first three words for ${fact}`} />
            </picture>
          )
        }
      </section>
    </main>
  )
}
