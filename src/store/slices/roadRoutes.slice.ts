import { createSlice } from '@reduxjs/toolkit'

export type PointType = {
  id: number
  routeName: string
  points: [number, number][]
}
type InitialStateType = {
  idCurrentRoute: number | null
  isLoading: boolean
  routes: PointType[]
  polyline: [number, number][]
}

const initialState: InitialStateType = {
  isLoading: false,
  idCurrentRoute: null,
  routes: [
    {
      id: 1,
      routeName: 'Маршрут №1',
      points: [
        [59.84660399, 30.29496392],
        [59.82934196, 30.42423701],
        [59.83567701, 30.38064206],
      ],
    },
    {
      id: 2,
      routeName: 'Маршрут №2',
      points: [
        [59.82934196, 30.42423701],
        [59.82761295, 30.41705607],
        [59.84660399, 30.29496392],
      ],
    },
    {
      id: 3,
      routeName: 'Маршрут №3',
      points: [
        [59.83567701, 30.38064206],
        [59.84660399, 30.29496392],
        [59.82761295, 30.41705607],
      ],
    },
  ],
  polyline: [],
}

const osrmSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPolylineCoordinators(state, action) {
      state.polyline = action.payload.routes[0].geometry.coordinates
    },
    setIdCurrentRoute(state, action) {
      state.idCurrentRoute = action.payload
    },
    setIdLoading(state, action) {
      state.isLoading = action.payload
    },
  },
})

export const roadRoutesReducer = osrmSlice.reducer
export const actionsMovies = osrmSlice.actions
