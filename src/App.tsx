import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <h1>Hi</h1>
      <ul>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default App
