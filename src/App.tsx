import React from 'react'
import { Provider } from 'react-redux'
import Header from './Header'
import Posts from './containers/Posts'
import configureStore from './store/configureStore'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Posts />
      </div>
    </Provider>
  )
}

export default App
