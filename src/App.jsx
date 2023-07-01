import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './App.css'
import { Main } from './Layout/Main'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { Admin } from './Pages/Admin'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
