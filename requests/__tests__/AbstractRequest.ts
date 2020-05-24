jest.mock('class-validator', () => ({
  __esModule: true,
  ...jest.requireActual('class-validator'),
  validateOrReject: jest.fn(),
}))

import AbstractRequest from '../AbstractRequest'
import { validateOrReject } from 'class-validator'
import { ValidationError } from '../../errors/ValidationError'

describe('AbstractRequest', () => {
  it('should be defined', () => {
    expect(AbstractRequest).toBeDefined()
  })

  describe('create a new instance', () => {
    it('should call getEventParams()', () => {
      const event = { body: JSON.stringify({ test: 'value' }) }

      const mockFunction = jest.fn()

      class TestRequest extends AbstractRequest {
        getEventParams(event) {
          mockFunction(event)
          return {}
        }
      }

      new TestRequest(event)

      expect(mockFunction).toBeCalledWith(event)
    })

    it('should set all properties from getEventParams() as current class properties', () => {
      const testValues = {
        test1: 'test1Value',
        test2: 'test2Value',
      }

      class TestRequest extends AbstractRequest {
        test1: string
        test2: string

        getEventParams(event) {
          return testValues
        }
      }

      const request = new TestRequest({})

      expect(request.test1).toBe(testValues.test1)
      expect(request.test2).toBe(testValues.test2)
    })
  })

  describe('validate()', () => {
    it('should call validateOrReject() from class-validator with current class as param', () => {
      const testValues = {
        test1: 'test1Value',
        test2: 'test2Value',
      }

      class TestRequest extends AbstractRequest {
        test1: string
        test2: string

        getEventParams(event) {
          return testValues
        }
      }

      const request = new TestRequest({})
      request.validate()

      expect(validateOrReject).toHaveBeenCalledWith(
        { ...request },
        expect.anything(),
      )
    })

    it('should throw ValidationError if validateOrReject() promise rejected', async () => {
      // @ts-ignore
      validateOrReject.mockReturnValue(Promise.reject())

      class TestRequest extends AbstractRequest {
        getEventParams(event) {
          return {}
        }
      }

      const request = new TestRequest({})

      await expect(request.validate()).rejects.toThrow(ValidationError)
    })

    it('should return void if validateOrReject() promise resolved', async () => {
      // @ts-ignore
      validateOrReject.mockReturnValue(Promise.resolve())

      class TestRequest extends AbstractRequest {
        getEventParams(event) {
          return {}
        }
      }

      const request = new TestRequest({})

      await expect(() => request.validate()).not.toThrow()
    })
  })
})
