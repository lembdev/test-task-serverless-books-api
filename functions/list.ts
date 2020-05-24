import { APIGatewayProxyHandler } from 'aws-lambda'
import booksRepository from '../repositories/booksRepository'
import response from '../libs/lambdaResponse'

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const books = await booksRepository.getAll()

    return response.success(books)
  } catch (error) {
    return response.error(error)
  }
}
