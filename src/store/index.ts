import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import rootReducer, { RootState } from '../slices'

const store = configureStore({ reducer: rootReducer })

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
