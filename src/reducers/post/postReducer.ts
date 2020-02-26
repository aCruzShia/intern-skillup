import { AnyAction } from 'redux'
import { POST_ACTIONS, Post } from './postAction'

export interface PostState {
  postList: Post[]
}

const initSate = {
  postList: [],
}

export default function postReducer(state: PostState = initSate, action: AnyAction) {
  switch (action.type) {
    case POST_ACTIONS.CREATE_POST:
      state.postList.push(action.payload)
      return state
    default:
      return state
  }
}
