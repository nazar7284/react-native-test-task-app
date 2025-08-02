import { useMutation } from '@tanstack/react-query'
import { api } from './axios'

export interface AddFavoritePayload {
  id: number
}

export interface AddFavoriteResponse {
  message: string
}

const addFavorite = async (
  payload: AddFavoritePayload,
): Promise<AddFavoriteResponse> => {
  try {
    const response = await api.post<AddFavoriteResponse>('/favorites', payload)
    return response.data
  } catch (error) {
    throw new Error('Failed to add favorite')
  }
}

export const useAddFavorite = () => {
  return useMutation({
    mutationFn: addFavorite,
  })
}
