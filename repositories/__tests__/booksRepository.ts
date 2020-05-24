import booksRepository, { BooksRepository } from '../booksRepository'
// @ts-ignore

jest.mock('../../libs/dynamodb')

describe('booksRepository', () => {
  it('should be defined', () => {
    expect(booksRepository).toBeDefined()
    expect(booksRepository instanceof BooksRepository).toBe(true)
  })
})

describe('BooksRepository', () => {
  test.todo('getAll')
  test.todo('getOne')
  test.todo('insert')
  test.todo('update')
  test.todo('delete')
})
