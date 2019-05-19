import createReducer from './redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
)

let mainStore = null

export default function configureStore() {
  const store = createStore(createReducer(), enhancer)
  store.asyncReducers = {}
  mainStore = store
  return store
}

export function injectAsyncReducer(name, asyncReducer) {
   mainStore.asyncReducers[name] = asyncReducer
   mainStore.replaceReducer(createReducer(mainStore.asyncReducers))
}
