import { request } from '../src/app'

describe('Pruebas relacionadas al inicio de sesion', () => {
  it('POST /login regresa un token enviando usuario y contraseña correctas', async () => {
    const result = await request.post('/login').send({ username: process.env.USERNAMELOGIN, password: process.env.PASSWORDLOGIN })
    expect(result.body.token).toBeDefined()
  })
  it('POST /login regresa 401 enviando usuario y contraseña incorrectas', async () => {
    const result = await request.post('/login').send({ username: 'falso', password: 'falso' })
    expect(result.statusCode).toBe(401)
  })
})