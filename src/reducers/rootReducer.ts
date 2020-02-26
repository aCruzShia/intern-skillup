import { combineReducers } from 'redux'
import postReducer, { PostState } from './post/postReducer'
import appReducer, { AppState } from './app/appReducer'

export interface StoreState {
  posts: PostState
  app: AppState
}

export default combineReducers<StoreState>({
  posts: postReducer,
  app: appReducer,
})
