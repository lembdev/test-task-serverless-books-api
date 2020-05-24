import { APIGatewayProxyHandler } from 'aws-lambda'
import UpdateRequest from '../requests/UpdateRequest'
import booksRepository from '../repositories/booksRepository'
import response from '../libs/lambdaResponse'

export const handler: APIGatewayProxyHandler = async (event) => {
  const request = new UpdateRequest(event)

  try {
    await request.validate()

    const existValues = await booksRepository.getOne(request.uuid)

    const book = { ...existValues, ...request }

    await booksRepository.update(book)

    return response.success(book)
  } catch (error) {
    return response.error(error)
  }
}
