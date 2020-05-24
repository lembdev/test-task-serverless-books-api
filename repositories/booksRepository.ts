import { v4 as uuid } from 'uuid'
import Book from '../dto/Book'
import { NotFoundError } from '../errors/NotFoundError'
import dynamodb from '../libs/dynamoDb'

export class BooksRepository {
  constructor(protected readonly provider, protected readonly tableName) {}

  async getAll(): Promise<Book[]> {
    const result = await this.provider.scan({ TableName: this.tableName })
    return result.Items
  }

  async getOne(uuid: string): Promise<Book> {
    const result = await this.provider.get({
      TableName: this.tableName,
      Key: { uuid },
    })

    if (!result.Item) throw new NotFoundError()

    return result.Item
  }

  async insert(book: Omit<Book, 'uuid'>): Promise<Book> {
    const item: Book = { ...book, uuid: uuid() }
    await dynamodb.put({ TableName: this.tableName, Item: item })
    return item
  }

  async update(book: Book): Promise<Book> {
    await dynamodb.update({
      TableName: this.tableName,
      Key: { uuid: book.uuid },
      ExpressionAttributeNames: {
        '#book_name': 'name',
      },
      ExpressionAttributeValues: {
        ':name': book.name,
        ':releaseDate': book.releaseDate,
        ':authorName': book.authorName,
      },
      UpdateExpression:
        'SET #book_name = :name, releaseDate = :releaseDate, authorName = :authorName',
    })

    return book
  }

  async delete(uuid: string): Promise<boolean> {
    await dynamodb.delete({ TableName: this.tableName, Key: { uuid } })
    return true
  }
}

export default new BooksRepository(dynamodb, process.env.DYNAMODB_TABLE)
