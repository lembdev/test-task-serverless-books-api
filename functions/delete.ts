import { APIGatewayProxyHandler } from 'aws-lambda'
import DeleteRequest from '../requests/DeleteRequest'
import booksRepository from '../repositories/booksRepository'
import response from '../libs/lambdaResponse'

export const handler: APIGatewayProxyHandler = async (event) => {
  const request = new DeleteRequest(event)

  try {
    await request.validate()
    await booksRepository.delete(request.uuid)

    return response.success({ message: 'Deleted' })
  } catch (error) {
    return response.error(error)
  }
}
