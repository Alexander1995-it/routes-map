import { AxiosResponse } from 'axios'
import { instance } from './http.service'

export const osrmService = {
  getRoutes(points: string): Promise<AxiosResponse<ResponseType>> {
    return instance.get(`${points}?overview=full&geometries=geojson`)
  },
}

type ResponseType = {
  code: string
  routes: [
    distance: number,
    duration: number,
    geometry: {
      coordinates: [number, number][]
    },
  ]
  waypoints: {
    hint: string
    distance: number
    name: string
    location: [number, number]
  }[]
}
