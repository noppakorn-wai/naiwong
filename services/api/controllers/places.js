import { router, get } from 'microrouter'
import axios from 'axios'

export const listPlace = async (req) => {
  const {
    data: { results },
  } = await axios('https://maps.googleapis.com/maps/api/place/textsearch/json', {
    params: {
      key: process.env.GOOGLE_MAP_API_KEY,
      type: 'restaurant',
      query: req.query.keyword,
      region: 'TH',
      language: 'TH',
    },
  })
  return {
    results: results.map(({ id, name, formatted_address: formattedAddress, ...rest }) => ({
      id,
      name,
      formattedAddress,
      ...rest,
    })),
  }
}

export default router(get('/api/places', listPlace))
