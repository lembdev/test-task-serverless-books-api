import UpdateRequest from '../UpdateRequest'

describe('UpdateRequest', () => {
  it('should be defined', () => {
    expect(UpdateRequest).toBeDefined()
  })

  describe('getEventParams()', () => {
    it('should return parsed event body', () => {
      const pathParameters = { uuid: 'testUUID' }
      const eventBody = { test: 'value' }
      const event = {
        pathParameters,
        body: JSON.stringify(eventBody),
      }

      const request = new UpdateRequest(event)

      expect(request.getEventParams(event)).toEqual({
        ...pathParameters,
        ...eventBody,
      })
    })
  })
})
