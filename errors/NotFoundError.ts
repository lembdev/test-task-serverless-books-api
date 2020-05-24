const HttpStatus = require('http-status-codes')

export class NotFoundError extends Error {
  statusCode: number

  constructor() {
    super('Not Found')
    this.statusCode = HttpStatus.NOT_FOUND
  }
}
