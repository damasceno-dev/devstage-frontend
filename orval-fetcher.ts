export const customFetcher = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw data
  }

  return data
}
