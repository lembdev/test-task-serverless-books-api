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

  getEventParams(event) {
    return gracefulJsonParse(event.body)
  }
}
