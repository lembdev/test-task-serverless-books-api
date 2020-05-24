import { ValidationError } from '../errors/ValidationError'
import { NotFoundError } from '../errors/NotFoundError'
import HttpStatus from 'http-status-codes'

export default {
  success: (body, statusCode = HttpStatus.OK) => ({
    statusCode,
    body: JSON.stringify(body),
  }),
  error: (error) => {
    if (error instanceof ValidationError) {
      return {
        statusCode: error.statusCode,
        body: JSON.stringify(error.errors),
      }
    }
    if (error instanceof NotFoundError) {
      return {
        statusCode: error.statusCode,
        body: JSON.stringify({ error: 'Not found' }),
      }
    }
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    }
  },
}
