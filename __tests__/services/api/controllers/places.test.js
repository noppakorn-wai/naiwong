import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { listPlace } from 'api/controllers/places'

const mock = new MockAdapter(axios)

mock.onGet('https://maps.googleapis.com/maps/api/place/textsearch/json').reply(200, {
  results: [{ id: 1, name: 'name', formatted_address: 'address' }],
})

describe('Status API controller', () => {
  it('Should response with status 200', async () => {
    const res = await listPlace({ query: { keyword: 'Bangsue' } })
    expect(res).toMatchObject({ results: [{ id: 1, name: 'name', formattedAddress: 'address' }] })
  })
})
