import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import Github from './components/Github'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="User/:id" element={<User />} />
        <Route path="Github" element={<Github />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
