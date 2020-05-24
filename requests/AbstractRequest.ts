import {
  APIGatewayEventDefaultAuthorizerContext,
  APIGatewayProxyEventBase,
} from 'aws-lambda'
import { validateOrReject } from 'class-validator'
import { ValidationError } from '../errors/ValidationError'

export default abstract class AbstractRequest {
  constructor(event) {
    const params = this.getEventParams(event)

    Object.assign(this, params)
  }

  abstract getEventParams(
    event: APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>,
  ): { [key: string]: any }

  async validate(): Promise<void> {
    try {
      await validateOrReject(this, { validationError: { target: false } })
    } catch (errors) {
      throw new ValidationError(errors)
    }
  }
}
