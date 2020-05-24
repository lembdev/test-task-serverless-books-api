import { APIGatewayProxyHandler } from 'aws-lambda'
import GetRequest from '../requests/GetRequest'
import booksRepository from '../repositories/booksRepository'
import response from '../libs/lambdaResponse'

export const handler: APIGatewayProxyHandler = async (event) => {
  const request = new GetRequest(event)

  try {
    await request.validate()

    const book = await booksRepository.getOne(request.uuid)

    return response.success(book)
  } catch (error) {
    return response.error(error)
  }
}
