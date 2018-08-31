import { createStore } from 'redux'
import { refractEnhancer } from 'refract-redux-xstream'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './store'

const store = createStore(reducers, {}, composeWithDevTools(refractEnhancer()))

export default store
