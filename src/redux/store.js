import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducerPhone from './phone/reducerPhone'
import reducerTv from './tv/reducerTv'
import reducerComments from './comments/reducerComments'

const rootReducer = combineReducers({
  phones: reducerPhone,
  television: reducerTv,
  comments: reducerComments
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
