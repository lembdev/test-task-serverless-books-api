import DeleteRequest from '../DeleteRequest'

describe('DeleteRequest', () => {
  it('should be defined', () => {
    expect(DeleteRequest).toBeDefined()
  })

  describe('getEventParams()', () => {
    it('should return book UUID from event params', () => {
      const pathParameters = { uuid: 'testUUID' }
      const event = { pathParameters }

      const request = new DeleteRequest(event)

      expect(request.getEventParams(event)).toEqual(pathParameters)
    })
  })
})
