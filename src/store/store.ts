import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux'
import { roadRoutesReducer } from './slices/roadRoutes.slice'
import createSagaMiddleware from 'redux-saga'
import { roadRouteWatcherSaga } from './sagas/roadRoutesSagas'

const rootReducer = combineReducers({
  roadRoutes: roadRoutesReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(thunkMiddleware, sagaMiddleware),
})

export type AppDispatch = typeof store.dispatch
export type AppRootStateType = ReturnType<typeof store.getState>

sagaMiddleware.run(rootWatcher)

function* rootWatcher() {
  yield roadRouteWatcherSaga()
}
