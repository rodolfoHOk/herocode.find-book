import axios from 'axios'

const API_URL = import.meta.env.VITE_BASE_URL

export const api = axios.create({
  baseURL: API_URL,
})
