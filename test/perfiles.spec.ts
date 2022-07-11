import { request } from '../src/app'

describe('/perfiles/5/0 ', () => {
  it('GET /perfiles obtiene una lista de perfiles', async () => {
    const result = await request.get('/perfiles/5/0').set('Authorization', process.env.TESTOKEN || '')
    expect(result.body.data).toBeInstanceOf(Array)
  })
  it('GET /perfiles/1/0 obtiene un resultado filtrado', async () => {
    const result = await request.get('/perfiles/1/0?primerApellido=donis').set('Authorization', process.env.TESTOKEN || '')
    expect(result.body.data[0].primerApellido.toLowerCase()).toEqual('donis')
  })
})