import * as path from 'node:path'
import * as dotenv from 'dotenv'
import { defineConfig } from 'orval'

// Load the appropriate .env file based on the NODE_ENV
const env = process.env.NODE_ENV || 'development'
dotenv.config({
  path: path.resolve(process.cwd(), `.env.${env}`),
})

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5241'

export default defineConfig({
  api: {
    input: `${apiUrl}/swagger/v1/swagger.json`,
    output: {
      target: 'src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: apiUrl,
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})
