import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="h1-navbar">
        <h1>Koohii</h1>
      </div>
      <div className="Navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Posts">Posts</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </div>
    </div>
  );
}
