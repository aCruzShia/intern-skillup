import { AnyAction } from 'redux'

export interface AppState {}

export default function appReducer(state: AppState = {}, action: AnyAction) {
  switch (action.type) {
    default:
      return state
  }
}
