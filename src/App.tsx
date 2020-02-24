import React from 'react'
import { Provider } from 'react-redux'
import Header from './Header'
import configureStore from './store/configureStore'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
      </div>
    </Provider>
  )
}

export default App
