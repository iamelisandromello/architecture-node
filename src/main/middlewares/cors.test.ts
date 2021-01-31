import app from '../config/app'
import request from 'supertest'

describe('CORS Middleware', () => {
  test('Should enable CORS', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .expect('access-conttrol-allow-origin', '*')
      .expect('access-conttrol-allow-methods', '*')
      .expect('access-conttrol-allow-headers', '*')
  })
})
