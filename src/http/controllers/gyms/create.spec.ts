import { app } from '@/app'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'
import { describe } from 'node:test'
import request from 'supertest'
import { afterAll, beforeAll, expect, it } from 'vitest'

describe('Create Gym e2e', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a gym', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const response = await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'JavaScript Gym',
        description: 'same description',
        phone: '1228838737',
        latitude: -2.9077572,
        longitude: -41.7705975,
      })

    expect(response.statusCode).toEqual(201)
  })
})
