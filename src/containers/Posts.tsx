import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import { createPostAction, getPostList, deletePost } from '../reducers/post/postAction'
import { StoreState } from '../reducers/rootReducer'

export default function Posts() {
  const dispatch = useDispatch()
  const { postList } = useSelector((storeState: StoreState) => ({
    postList: storeState.posts.postList,
  }))

  const [content, setContent] = useState<string>('')

  useEffect(() => {
    dispatch(getPostList())
  }, [dispatch])

  const handleClick = () => {
    dispatch(
      createPostAction({
        content,
      }),
    )
    setContent('')
  }

  const handleDelete = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      dispatch(deletePost([e.currentTarget.dataset['postId']!]))
    },
    [dispatch],
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setContent(value)
    },
    [setContent],
  )

  return (
    <Container maxWidth="md">
      <TextField
        id="standard-full-width"
        label="Create Post"
        style={{ margin: 8 }}
        placeholder="input content.."
        fullWidth
        onChange={handleChange}
        value={content}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button onClick={handleClick} color="primary">
        Submit
      </Button>
      <div>
        Posts
        <List component="nav" aria-label="contacts">
          {postList.map((post, idx) => (
            <ListItem key={post.id} button>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${post.id}`}
                  src={`https://material-ui.com/static/images/avatar/${idx + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={post.id} primary={post.content} />
              <ListItemSecondaryAction data-post-id={post.id} onClick={handleDelete}>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  )
}
