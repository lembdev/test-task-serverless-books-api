import { APIGatewayProxyEvent, Context } from 'aws-lambda'
import { handler } from '../create'
// @ts-ignore
import CreateRequest, { mockValidate } from '../../requests/CreateRequest'
// @ts-ignore
import { mockInsert } from '../../repositories/booksRepository'

jest.mock('../../requests/CreateRequest')

jest.mock('../../repositories/booksRepository')

describe('Lambda Create handler', () => {
  let event = {} as APIGatewayProxyEvent
  let context = {} as Context

  beforeEach(() => {
    mockValidate.mockClear()
    mockInsert.mockClear()
  })

  it('should be defined', () => {
    expect(handler).toBeDefined()
    expect(typeof handler).toBe('function')
  })

  it('should create new book', () => {
    mockInsert.mockImplementation()

    handler(event, context, () => {})

    expect(CreateRequest).toHaveBeenCalledTimes(1)
    expect(mockValidate).toHaveBeenCalledTimes(1)
  })
})
