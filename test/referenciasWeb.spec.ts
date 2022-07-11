import { request } from '../src/app'

describe('prueba', () => {
  it('primera', async () => {
    const res = await request.get('/')

    expect(true).toBe(true)
  })
})