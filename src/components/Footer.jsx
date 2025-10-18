import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="tcj-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TCJ Core Values</h3>
          <ul>
            <li>Accountability</li>
            <li>Participation</li>
            <li>Inclusivity</li>
            <li>Integrity</li>
            <li>Peaceful Coexistence</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/objectives">Our Objectives</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/get-involved">Membership</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact & Legal</h3>
          <p>Headquarters: Lokichar, Turkana County</p>
          <p>Email: info@turkana-civic-justice.org</p>
          <p>Compliance: Constitution of Kenya, 2010 and Social Development Act, 2022</p>
        </div>
      </div>
      
      <div className="copyright">
        &copy; {new Date().getFullYear()} Turkana Civic Justice (TCJ). All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer