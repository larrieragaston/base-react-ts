import { SWCharacterProps } from './sw.types'

interface SWGetRootResponse {
  people: string
  planets: string
  films: string
  species: string
  vehicles: string
  starships: string
}

interface SWGetPeopleResponse {
  results: Array<SWCharacterProps>
}

export interface SWService {
  getRoot: () => Promise<SWGetRootResponse>
  getPeople: () => Promise<SWGetPeopleResponse>
  getPersonById: (id?: string) => Promise<SWCharacterProps>
}
