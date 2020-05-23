import GetRequest from '../GetRequest'

describe('GetRequest', () => {
  it('should be defined', () => {
    expect(GetRequest).toBeDefined()
  })

  describe('getEventParams()', () => {
    it('should return book UUID from event params', () => {
      const pathParameters = { uuid: 'testUUID' }
      const event = { pathParameters }

      const request = new GetRequest(event)

      expect(request.getEventParams(event)).toEqual(pathParameters)
    })
  })
})
