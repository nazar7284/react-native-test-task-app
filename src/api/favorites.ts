import { useMutation } from '@tanstack/react-query'

const API_URL = 'https://test-task-server-production-3257.up.railway.app'

export interface AddFavoritePayload {
  id: number
}

export interface AddFavoriteResponse {
  message: string
}

const addFavorite = async (
  payload: AddFavoritePayload,
): Promise<AddFavoriteResponse> => {
  const res = await fetch(`${API_URL}/favorites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    throw new Error('Failed to add favorite')
  }

  return (await res.json()) as AddFavoriteResponse
}

export const useAddFavorite = () => {
  return useMutation({
    mutationFn: addFavorite,
  })
}
