import { verifyJWT } from '@/http/middlewares/verify-jtw'
import { FastifyInstance } from 'fastify'
import { create } from './create'
import { validate } from './validate'
import { history } from './history'
import { metrics } from './metrics'

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/check-ins/history', history)
  app.get('/check-ins/metrics', metrics)

  app.post('/check-ins/:gymId', create)
  app.patch('/check-ins/:checkInId/validate', validate)
}
