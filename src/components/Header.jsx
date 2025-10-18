import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="tcj-header">
      <div className="logo-container">
        <Link to="/" className="tcj-title-link">
          <h1>TURKANA CIVIC JUSTICE (TCJ)</h1>
          <p className="tagline">Participation. Accountability. Peace.</p>
        </Link>
      </div>

      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/objectives">Objectives</Link></li>
          <li><Link to="/team">Our Team</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header