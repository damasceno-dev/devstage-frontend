import { defineConfig } from 'orval'

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
