import { getStatus } from 'api/controllers/status'

describe('Status API controller', () => {
  it('Should response with status 200', async () => {
    const res = await getStatus()
    expect(res).toMatchObject({ status: 200 })
  })
})
