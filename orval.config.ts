import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'http://localhost:5241/swagger/v1/swagger.json',
    output: {
      target: 'src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: 'http://localhost:5241',
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})
