const HttpStatus = require('http-status-codes')

export class ValidationError extends Error {
  statusCode: number
  errors: any[]

  constructor(errors) {
    super('Validation Error')
    this.statusCode = HttpStatus.BAD_REQUEST
    this.errors = errors
  }
}
