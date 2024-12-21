import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {UserPages} from './pages/usersPages'
import { UserFormPages } from './pages/UsersFormPages'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element ={<Navigate to = "/users"/>} />
        <Route path="/users" element ={<UserPages/>} />
        <Route path="/users-create" element ={<UserFormPages/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App