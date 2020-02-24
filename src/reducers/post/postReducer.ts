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
      return {
        postList: state.postList.concat([action.payload]),
      }
    default:
      return state
  }
}
