import { call, put, takeEvery } from 'redux-saga/effects'
import { osrmService } from '../../api/service.osrm'
import { actionsMovies } from '../slices/roadRoutes.slice'

export function* roadRouteWatcherSaga() {
  yield takeEvery('GET-POLYLINE', getPolylineWorkerSaga)
}

export function* getPolylineWorkerSaga(action: ReturnType<typeof getPolyline>): any {
  try {
    yield put(actionsMovies.setIdLoading(true))
    const response = yield call(osrmService.getRoutes, action.params.endpointRoute)
    yield put(actionsMovies.setPolylineCoordinators(response.data))
    yield put(actionsMovies.setIdCurrentRoute(action.params.id))
  } catch (e) {
  } finally {
    yield put(actionsMovies.setIdLoading(false))
  }
}

export const getPolyline = (params: { endpointRoute: string; id: number }) => ({
  type: 'GET-POLYLINE',
  params,
})
