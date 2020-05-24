export const mockGetAll = jest.fn()
export const mockGetOne = jest.fn()
export const mockInsert = jest.fn()
export const mockUpdate = jest.fn()
export const mockDelete = jest.fn()

export default {
  getAll: mockGetAll,
  getOne: mockGetOne,
  insert: mockInsert,
  update: mockUpdate,
  delete: mockDelete,
}
