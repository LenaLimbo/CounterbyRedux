import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux' 
import Counter from './components/Counter'
import counter from './reducers'
import './components/Counter.css'

const store = createStore(counter)
const rootElement = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}

  /> ,rootElement
)
render()
store.subscribe(render)