import CreateRequest from '../CreateRequest'
import { APIGatewayProxyEventBase } from 'aws-lambda'

describe('CreateRequest', () => {
  it('should be defined', () => {
    expect(CreateRequest).toBeDefined()
  })

  describe('getEventParams()', () => {
    it('should return parsed event body', () => {
      const eventBody = { test: 'value' }
      const event = {
        body: JSON.stringify(eventBody),
      } as APIGatewayProxyEventBase<{ [name: string]: any }>

      const request = new CreateRequest({})

      expect(request.getEventParams(event)).toEqual(eventBody)
    })
  })
})
