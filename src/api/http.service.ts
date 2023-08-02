import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://router.project-osrm.org/route/v1/driving/',
})
