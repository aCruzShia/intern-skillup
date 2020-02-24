import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPostAction } from '../reducers/post/postAction'
import { StoreState } from '../reducers/rootReducer'
import { v4 } from 'uuid'

export default function Posts() {
  const dispatch = useDispatch()
  const { postList } = useSelector((storeState: StoreState) => ({
    postList: storeState.posts.postList,
  }))

  const [count, setCount] = useState(0)

  useEffect(() => {
    dispatch(
      createPostAction({
        id: v4(),
        content: 'yo yo' + new Date().toUTCString(),
        createAt: new Date().toUTCString(),
      }),
    )
  }, [dispatch, count])

  return (
    <>
      Posts
      {postList.map(post => (
        <li key={post.id}>{post.content}</li>
      ))}
      <button onClick={() => setCount(count + 1)}>update</button>
    </>
  )
}
