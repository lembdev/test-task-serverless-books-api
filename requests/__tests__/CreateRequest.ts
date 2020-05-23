import CreateRequest from '../CreateRequest'

describe('CreateRequest', () => {
  it('should be defined', () => {
    expect(CreateRequest).toBeDefined()
  })

  describe('getEventParams()', () => {
    it('should return parsed event body', () => {
      const eventBody = { test: 'value' }
      const event = {
        body: JSON.stringify(eventBody),
      }

      const request = new CreateRequest(event)

      expect(request.getEventParams(event)).toEqual(eventBody)
    })
  })
})
