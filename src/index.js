import 'react-app-polyfill/ie11'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'

import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import configureStore from './store'
import Routes from './routes'

import { Provider } from 'react-redux'

import init from './init'

import * as serviceWorker from './serviceWorker'

let store = configureStore()
let history = createBrowserHistory()

const PreloaderLayout = () => (<div>Prloader...</div>)
ReactDOM.render(<PreloaderLayout />, document.getElementById('root'))

const main = async () => {
    init(store, history)

    ReactDOM.render(<Provider store={store}>
        <Router history={history}>
            <Suspense fallback={<PreloaderLayout />}>
                <Routes />
            </Suspense>
        </Router>
    </Provider>, document.getElementById('root'))
}
main()

serviceWorker.unregister();
