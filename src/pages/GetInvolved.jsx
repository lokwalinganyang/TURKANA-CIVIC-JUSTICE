const GetInvolved = () => {
  return (
    <section className="tcj-get-involved">
      <h2 className="section-title">Get Involved: Membership and Participation</h2>
      
      <div className="card">
        <p>
          Participation is a core value of Turkana Civic Justice. We welcome individuals committed 
          to democracy, peace, and accountability to join our movement.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Ordinary Membership</h3>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
            <li>Open to any resident of Turkana County</li>
            <li>Must be aged 18 years and above</li>
            <li>Must pay prescribed subscription fees</li>
            <li>Required to uphold TCJ Constitution and values</li>
          </ul>
        </div>

        <div className="card">
          <h3>Special Membership</h3>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
            <li>For development partners and donors</li>
            <li>Individuals who contribute to TCJ's objectives</li>
            <li>Terms set by Executive Committee</li>
          </ul>
        </div>

        <div className="card">
          <h3>Honorary Membership</h3>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
            <li>Distinguished community leaders</li>
            <li>Elected officials and religious leaders</li>
            <li>Granted by Annual General Meeting approval</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h3>Rights and Duties</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
          <div>
            <h4>Rights of Members</h4>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>To vote and be voted into office</li>
              <li>To attend all meetings</li>
              <li>To participate in programs and activities</li>
              <li>To access organization information</li>
            </ul>
          </div>
          <div>
            <h4>Duties of Members</h4>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Uphold TCJ Constitution and values</li>
              <li>Pay required fees</li>
              <li>Attend meetings and participate actively</li>
              <li>Promote TCJ's image and objectives</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved