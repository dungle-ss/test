import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import ParticipantManagement from './containers/ParticipantManagement'
import reportWebVitals from './reportWebVitals'
import rootStore from './store/rootStore'

ReactDOM.render(
  <Provider store={rootStore}>
    <ParticipantManagement />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()