import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
