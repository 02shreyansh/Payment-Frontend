import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ChakraProvider} from "@chakra-ui/react"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Home from './Components/Home'
import Payment from './Components/Payment'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path=''  element={<Home/>}/>
      <Route path='/paymentDone' element={<Payment/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </StrictMode>,
)
