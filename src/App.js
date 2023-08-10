import React from 'react'

import { Provider } from 'react-redux'

import store from './redux/store'
import PhoneContainer from './components/PhoneContainer'
import TvContainer from './components/TvContainer'
import CommentsContainer from './components/CommentsContainer'
import AdminContainer from './components/AdminContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneContainer />
        <TvContainer />
      </div>
      <AdminContainer />
      <CommentsContainer />
    </Provider>
  )
}

export default App
