export default (input) => {
  try {
    const body = JSON.parse(input)
    if (body === null) throw new Error()
    if (typeof body !== 'object') throw new Error()

    return body
  } catch (e) {
    return {}
  }
}
