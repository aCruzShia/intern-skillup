import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { StoreState } from './reducers/rootReducer'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Header() {
  const { postList } = useSelector((state: StoreState) => ({
    postList: state.posts.postList,
  }))
  const classes = useStyles()
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Clicked {count}, currently {postList.length} Post
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                setCount(count + 1)
              }}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}
