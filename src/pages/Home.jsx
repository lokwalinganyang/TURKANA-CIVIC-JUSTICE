import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="tcj-home">
      <div className="card">
        <h1 className="hero-title">TURKANA CIVIC JUSTICE</h1>
        <p className="hero-tagline">Participation. Accountability. Peace.</p>
        <p className="hero-text">
          Working towards a just, democratic, and peaceful Turkana County where every citizen 
          actively participates in governance and civic life.
        </p>
        
        <div className="hero-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <Link to="/get-involved" className="btn btn-primary">Get Involved Today</Link>
          <Link to="/objectives" className="btn btn-secondary">View Our Objectives</Link>
        </div>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Our Vision</h3>
          <p>"A just, democratic, and peaceful Turkana County where every citizen actively participates in governance and civic life."</p>
        </div>
        
        <div className="card">
          <h3>Our Mission</h3>
          <p>"To promote democracy, good governance, human rights, youth and women political participation, peacebuilding, and civic justice."</p>
        </div>
      </div>
    </section>
  )
}

export default Home