import {
  APIGatewayEventDefaultAuthorizerContext,
  APIGatewayProxyEventBase,
} from 'aws-lambda'
import { IsInt, IsString } from 'class-validator'
import AbstractRequest from './AbstractRequest'
import gracefulJsonParse from '../libs/gracefulJsonParse'

export default class CreateRequest extends AbstractRequest {
  @IsString()
  readonly name: string

  @IsInt()
  readonly releaseDate: number

  @IsString()
  readonly authorName: string

  getEventParams(
    event: APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>,
  ): { [p: string]: any } {
    return gracefulJsonParse(event.body)
  }
}
