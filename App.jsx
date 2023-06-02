import './App.css'
import { useCatFact, useCatImage } from './hooks'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const App = () => {
  const { fact, getFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

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
