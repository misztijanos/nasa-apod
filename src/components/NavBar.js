import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link className="link" to="/">
          Take me home
        </Link>
      </ul>
    </div>
  )
}
