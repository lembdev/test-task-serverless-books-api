export const mockValidate = jest.fn()

export default jest.fn().mockImplementation(() => ({ validate: mockValidate }))
