const About = () => {
  return (
    <section className="tcj-about">
      <h2 className="section-title">About Turkana Civic Justice (TCJ)</h2>
      
      <div className="card">
        <p>
          Turkana Civic Justice (TCJ) is a Community-Based Organization (CBO) established to foster 
          a just, democratic, and peaceful society in Turkana County. We operate under the legal 
          framework of the <strong>Social Development Act, 2022</strong> of the Republic of Kenya.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Our principal office and <strong>headquarters are located in Lokichar, Turkana County</strong>.
        </p>
      </div>

      <div className="card">
        <h3>Core Values</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ background: '#e8f5e9', padding: '1rem', borderRadius: '6px', flex: '1', minWidth: '150px' }}>
            <strong>Accountability</strong>
          </div>
          <div style={{ background: '#e8f5e9', padding: '1rem', borderRadius: '6px', flex: '1', minWidth: '150px' }}>
            <strong>Participation</strong>
          </div>
          <div style={{ background: '#e8f5e9', padding: '1rem', borderRadius: '6px', flex: '1', minWidth: '150px' }}>
            <strong>Inclusivity</strong>
          </div>
          <div style={{ background: '#e8f5e9', padding: '1rem', borderRadius: '6px', flex: '1', minWidth: '150px' }}>
            <strong>Integrity</strong>
          </div>
          <div style={{ background: '#e8f5e9', padding: '1rem', borderRadius: '6px', flex: '1', minWidth: '150px' }}>
            <strong>Peaceful Coexistence</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About