import { Post } from '../../model/post'
export const POST_ACTIONS = {
  CREATE_POST: '@POST/CREATE',
  GET_POST_LIST: '@POST/GET_LIST',
  GET_POST_LIST_SUCCESS: '@POST/GET_LIST_SUCCESS',
  GET_POST_LIST_FAILED: '@POST/GET_LIST_FAILED',
  DELETE_POST: '@POST/DELETE',
  DELETE_POST_SUCCESS: '@POST/DELETE_SUCCESS',
  DELETE_POST_FAILED: '@POST/DELETE_FAILED',
}

export const createPostAction = (payload: { content: string }) => ({
  type: POST_ACTIONS.CREATE_POST,
  payload,
})

export const getPostList = () => ({
  type: POST_ACTIONS.GET_POST_LIST,
})

export const getPostListSuccess = (payload: Post[]) => ({
  type: POST_ACTIONS.GET_POST_LIST_SUCCESS,
  payload,
})

export const getPostListFailed = () => ({
  type: POST_ACTIONS.GET_POST_LIST_FAILED,
})

export const deletePost = (payload: string[]) => ({
  type: POST_ACTIONS.DELETE_POST,
  payload,
})

export const deletePostSuccess = (payload: string[]) => ({
  type: POST_ACTIONS.DELETE_POST_SUCCESS,
  payload,
})

export const deletePostFailed = () => ({
  type: POST_ACTIONS.DELETE_POST_FAILED,
})
