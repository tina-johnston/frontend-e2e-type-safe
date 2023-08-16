import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createClient, cacheExchange, fetchExchange, Provider } from 'urql';

const client = createClient({
  url: import.meta.env.VITE_API_URL || 'http://localhost:4000/graphql',
  exchanges: [cacheExchange, fetchExchange]
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
)
