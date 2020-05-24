import { DynamoDB } from 'aws-sdk'

const isOffline = () => process.env.PROVIDER_STAGE === 'dev'
const options = {
  region: 'localhost',
  endpoint: 'http://localhost:8000',
}

const dynamodb = isOffline()
  ? new DynamoDB.DocumentClient(options)
  : new DynamoDB.DocumentClient()

export default {
  scan: async (params) => dynamodb.scan(params).promise(),
  get: async (params) => dynamodb.get(params).promise(),
  put: async (params) => dynamodb.put(params).promise(),
  update: async (params) => dynamodb.update(params).promise(),
  delete: async (params) => dynamodb.delete(params).promise(),
}
