import axios from 'axios'

const API_URL = 'https://test-task-server-production-3257.up.railway.app'

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
