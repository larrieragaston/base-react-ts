import api from './api'
import { RootApiService } from '../types/ApiService.types'

export const rootApiService: RootApiService = {
  getRoot: () => api.get('/'),
  getStatus: () => api.get('/status'),
}
