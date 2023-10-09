import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -2.9077572,
      longitude: -41.7705975,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -2.9344708,
      longitude: -41.6472155,
    })

    const { gyms } = await sut.execute({
      userLatitude: -2.9077572,
      userLongitude: -41.7705975,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
