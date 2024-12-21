import {Link} from 'react-router-dom'

export function Navigation() {
    return (
      <div>
        <Link to = "/users">
            <h1>User app</h1>
        </Link>
        <Link to = "/users-create">Create User</Link>
      </div>
    )
}