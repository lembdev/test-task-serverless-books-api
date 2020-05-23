import { IsInt, IsString, IsUUID } from 'class-validator'
import AbstractRequest from './AbstractRequest'
import gracefulJsonParse from '../libs/gracefulJsonParse'

export default class UpdateRequest extends AbstractRequest {
  @IsUUID(4)
  readonly uuid: string

  @IsString()
  readonly name: string

  @IsInt()
  readonly releaseDate: number

  @IsString()
  readonly authorName: string

  getEventParams(event) {
    return {
      ...gracefulJsonParse(event.body),
      uuid: event.pathParameters.uuid,
    }
  }
}
