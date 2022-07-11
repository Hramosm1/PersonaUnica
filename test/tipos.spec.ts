import { request } from '../src/app'

describe('/tipos Obtiene como resultado un array en las siguientes rutas', () => {
  it("/genero", async () => {
    const result = await request.get('/tipos/genero')
    expect(result.body).toBeInstanceOf(Array)
  })
  it("/contacto", async () => {
    const result = await request.get('/tipos/contacto')
    expect(result.body).toBeInstanceOf(Array)
  })
  it("/documento", async () => {
    const result = await request.get('/tipos/documento')
    expect(result.body).toBeInstanceOf(Array)
  })
  it("/origen", async () => {
    const result = await request.get('/tipos/origen')
    expect(result.body).toBeInstanceOf(Array)
  })
  it("/pagina", async () => {
    const result = await request.get('/tipos/pagina')
    expect(result.body).toBeInstanceOf(Array)
  })
  it("/persona", async () => {
    const result = await request.get('/tipos/persona')
    expect(result.body).toBeInstanceOf(Array)
  })
  it("/telefono", async () => {
    const result = await request.get('/tipos/telefono')
    expect(result.body).toBeInstanceOf(Array)
  })
})