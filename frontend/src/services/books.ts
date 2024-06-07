import { api } from './api'

export const searchBooks = async (search: string) => {
  try {
    const response = await api.get('/books', {
      params: {
        search,
      },
    })
    return response.data.data
  } catch (error) {
    return null
  }
}
