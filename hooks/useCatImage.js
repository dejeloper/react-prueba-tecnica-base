import { useEffect, useState } from 'react'
import { getImage } from '../services/facts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const useCatImage = ({ fact, limit = 5 }) => {
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    if (!fact) return

    const words = fact.split(' ').slice(0, limit).join(' ')
    getImage(words).then(newUrl => setImageURL(newUrl))
  }, [fact])

  return { imageURL: `${CAT_PREFIX_IMAGE_URL}${imageURL}` }
}
