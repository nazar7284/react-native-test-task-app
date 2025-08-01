import { useQuery } from '@tanstack/react-query'

export interface Activity {
  id: number
  photoUrl: string
  name: string
  description: string
  location: string
  price: number
  rating: number
}

const API_URL = 'https://test-task-server-production-3257.up.railway.app'

const fetchActivities = async (): Promise<Activity[]> => {
  const res = await fetch(`${API_URL}/activities`)
  if (!res.ok) {
    throw new Error('Failed to fetch activities')
  }
  return (await res.json()) as Activity[]
}

export const useActivities = () => {
  return useQuery<Activity[]>({
    queryKey: ['activities'],
    queryFn: fetchActivities,
  })
}
