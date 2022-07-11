import { request } from '../src/app'

describe('GET /empresas', () => {
  it('GET /empresas/10/0/ contiene un array body.data', async () => {
    const result = await request.get('/empresas/5/0/')
    expect(result.body.data).toBeInstanceOf(Array)
  })
  it('GET /empresas/10/0/ contiene objeto body.pageData', async () => {
    const result = await request.get('/empresas/5/0/')
    expect(result.body.pageData).toBeInstanceOf(Object)
  })
  it('GET /empresas/3/0/ obtiene un array con 3 elementos', async () => {
    const result = await request.get('/empresas/3/0/')
    expect(result.body.data.length).toBe(3)
  })
  it('GET /empresas/1/0/karu filtro por el nombre', async () => {
    const result = await request.get('/empresas/1/0/karu')
    const str = JSON.stringify(result.body.data[0]).toLowerCase()
    expect(str).toContain('karu')
  })
})