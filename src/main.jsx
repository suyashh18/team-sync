import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.jsx'
import AuthRoutes from './app/routes/AuthRoutes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

let queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
   <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <AuthRoutes />
    </Provider>
    </QueryClientProvider>
  
)
