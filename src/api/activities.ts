import { useQuery } from '@tanstack/react-query'
import { api } from './axios'

export interface Activity {
  id: number
  photoUrl: string
  name: string
  description: string
  location: string
  price: number
  rating: number
}

const fetchActivities = async (): Promise<Activity[]> => {
  try {
    const response = await api.get<Activity[]>('/activities')
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch activities')
  }
}

export const useActivities = () => {
  return useQuery<Activity[]>({
    queryKey: ['activities'],
    queryFn: fetchActivities,
  })
}
