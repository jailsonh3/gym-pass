import { app } from '@/app'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'
import { describe } from 'node:test'
import request from 'supertest'
import { afterAll, beforeAll, expect, it } from 'vitest'

describe('Search Gyms e2e', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to search gyms by title', async () => {
    const { token } = await createAndAuthenticateUser(app)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'JavaScript Gym',
        description: 'same description',
        phone: '1228838737',
        latitude: -2.9077572,
        longitude: -41.7705975,
      })

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'TypeScript Gym',
        description: 'same description',
        phone: '1228838737',
        latitude: -2.9077572,
        longitude: -41.7705975,
      })

    const response = await request(app.server)
      .get('/gyms/search')
      .query({
        query: 'JavaScript',
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        title: 'JavaScript Gym',
      }),
    ])
  })
})
