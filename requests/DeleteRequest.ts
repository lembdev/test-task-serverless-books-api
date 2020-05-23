import { IsUUID } from 'class-validator'
import AbstractRequest from './AbstractRequest'

export default class DeleteRequest extends AbstractRequest {
  @IsUUID(4)
  readonly uuid: string

  getEventParams(event) {
    return { uuid: event.pathParameters.uuid }
  }
}
