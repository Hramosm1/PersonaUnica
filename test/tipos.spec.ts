import { request } from '../src/app'

describe('GET /tipos', () => {
  it("/genero Obtiene como resultado un array", async () => {
    const result = await request.get('/tipos/genero').set('Authorization', process.env.TESTOKEN || '')
    expect(result.body).toBeInstanceOf(Array)
  })
  it("/contacto Obtiene como resultado un array", async () => {
    const result = await request.get('/tipos/contacto').set('Authorization', process.env.TESTOKEN || '')
    expect(result.body).toBeInstanceOf(Array)
  })
  it("/documento Obtiene como resultado un array", async () => {
    const result = await request.get('/tipos/documento').set('Authorization', process.env.TESTOKEN || '')
    expect(result.body).toBeInstanceOf(Array)
  })
  it("/origen Obtiene como resultado un array", async () => {
    const result = await request.get('/tipos/origen').set('Authorization', process.env.TESTOKEN || '')
    expect(result.body).toBeInstanceOf(Array)
  })
  it("/pagina Obtiene como resultado un array", async () => {
    const result = await request.get('/tipos/pagina').set('Authorization', process.env.TESTOKEN || '')
    expect(result.body).toBeInstanceOf(Array)
  })
  it("/persona Obtiene como resultado un array", async () => {
    const result = await request.get('/tipos/persona').set('Authorization', process.env.TESTOKEN || '')
    expect(result.body).toBeInstanceOf(Array)
  })
  it("/telefono Obtiene como resultado un array", async () => {
    const result = await request.get('/tipos/telefono').set('Authorization', process.env.TESTOKEN || '')
    expect(result.body).toBeInstanceOf(Array)
  })
})