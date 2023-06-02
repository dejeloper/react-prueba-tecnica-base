import { useEffect, useState } from 'react'
import { getImage, getRandomFact } from './services/facts'
import './App.css'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const App = () => {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  const getFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  const getImg = () => {
    if (!fact) return

    getImage(fact).then(newUrl => setImageURL(newUrl))
  }

  useEffect(() => {
    getFact()
  }, [])

  useEffect(() => {
    getImg()
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
