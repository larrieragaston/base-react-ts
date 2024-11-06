export interface ApiGetRootResponse {
  name: string
  version: string
}

interface ApiGetStatusResponse {
  status: string
}

export interface RootApiService {
  getRoot: () => Promise<ApiGetRootResponse>
  getStatus: () => Promise<ApiGetStatusResponse>
}
