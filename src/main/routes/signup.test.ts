import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Elisandro',
        email: 'elisandro.mello@mail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
