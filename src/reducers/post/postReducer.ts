import { AnyAction } from 'redux'
import { POST_ACTIONS } from './postAction'
import { Post } from '../../model/post'

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
        ...state,
        postList: state.postList.concat(action.payload),
      }
    case POST_ACTIONS.GET_POST_LIST_SUCCESS:
      return {
        ...state,
        postList: action.payload,
      }
    case POST_ACTIONS.DELETE_POST_SUCCESS:
      return {
        ...state,
        postList: state.postList.filter(post => !action.payload.includes(post.id)),
      }
    default:
      return state
  }
}
