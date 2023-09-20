import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
// import App from './App'
import ChakraCard from './Card'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <h1>Welcome to YoursChoice Store</h1>
    <ChakraProvider>
      <ChakraCard/>      
    </ChakraProvider>
  </React.StrictMode>,
)
