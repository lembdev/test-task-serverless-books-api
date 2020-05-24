import { APIGatewayProxyHandler } from 'aws-lambda'
import HttpStatus from 'http-status-codes'
import CreateRequest from '../requests/CreateRequest'
import booksRepository from '../repositories/booksRepository'
import response from '../libs/lambdaResponse'

export const handler: APIGatewayProxyHandler = async (event) => {
  const request = new CreateRequest(event)

  try {
    await request.validate()

    const book = await booksRepository.insert(request)

    return response.success(book, HttpStatus.CREATED)
  } catch (error) {
    return response.error(error)
  }
}
