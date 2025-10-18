const Team = () => {
  return (
    <section className="tcj-team">
      <h2 className="section-title">Our Governance Structure</h2>
      
      <div className="card">
        <h3>Executive Committee (EC)</h3>
        <p>The EC is responsible for implementing decisions and providing oversight. Members serve a two-year term, renewable once through election.</p>
        
        <div style={{ marginTop: '1.5rem' }}>
          <h4>Composition:</h4>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Chairperson</li>
            <li>Vice Chairperson</li>
            <li>Secretary</li>
            <li>Treasurer</li>
            <li>Three Committee Members</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h3>Executive Director (ED)</h3>
        <p>
          The ED serves as the <strong>Chief Executive Officer</strong> of TCJ and provides strategic 
          and operational leadership for the organization.
        </p>
        <p style={{ marginTop: '1rem' }}>
          The ED represents TCJ in official engagements, leads program planning and implementation, 
          mobilizes resources, and ensures proper use and accountability.
        </p>
      </div>
    </section>
  )
}

export default Team