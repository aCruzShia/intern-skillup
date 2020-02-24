import { AnyAction } from 'redux'

interface Post {
  id: string
  content: string
  createAt: string
}

interface PostState {
  postList: Post[]
}

const initSate = {
  postList: [],
}

export default function postReducer(state: PostState = initSate, action: AnyAction) {
  switch (action) {
    default:
      return state
  }
}
