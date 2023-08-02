import { PointType } from '../slices/roadRoutes.slice'
import { AppRootStateType } from '../store'

export const getCoordinatorsPayline = (state: AppRootStateType) => state.roadRoutes.polyline
export const getWaypoints = (state: AppRootStateType): PointType[] => state.roadRoutes.routes
export const getIdCurrentRoute = (state: AppRootStateType) => state.roadRoutes.idCurrentRoute
export const getIsLoading = (state: AppRootStateType) => state.roadRoutes.isLoading
