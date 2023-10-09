import { verifyJWT } from '@/http/middlewares/verify-jtw'
import { FastifyInstance } from 'fastify'
import { searchGyms } from './search-gyms'
import { nearbyGyms } from './nearby-gyms'
import { createGym } from './create-gym'

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/gyms/search', searchGyms)

  app.get('/gyms/nearby', nearbyGyms)

  app.post('/gyms', createGym)
}
