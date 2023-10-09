import { app } from '@/app'
import { prisma } from '@/lib/prisma'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'
import { describe } from 'node:test'
import request from 'supertest'
import { afterAll, beforeAll, expect, it } from 'vitest'

describe('Create Check-in e2e', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a check-in', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const gym = await prisma.gym.create({
      data: {
        title: 'JavaScript Gym',
        latitude: -2.9077572,
        longitude: -41.7705975,
      },
    })

    const response = await request(app.server)
      .post(`/check-ins/${gym.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        latitude: -2.9077572,
        longitude: -41.7705975,
      })

    expect(response.statusCode).toEqual(201)
  })
})
