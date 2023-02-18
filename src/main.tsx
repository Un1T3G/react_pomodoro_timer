import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './components/app/App'
import { setupStore } from './store'
import { Provider } from 'react-redux'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
