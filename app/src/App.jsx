import { useState } from 'react'
import { destinatii } from './data/destinatii.js'
import { formatDestinatie, getNevizitate, totalZile } from './utils/destinatii.js'

function App() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">TEHNOLOGII WEB · LABORATORUL 2</p>
        <h1>City Explorer</h1>
        <p>Prelucrarea datelor cu JavaScript modern și module ES.</p>
      </header>

      <section className="summary" aria-label="Rezumat">
        <div><strong>{destinatii.length}</strong><span>destinații</span></div>
        <div><strong>{getNevizitate(destinatii).length}</strong><span>de explorat</span></div>
        <div><strong>{totalZile(destinatii)}</strong><span>zile în total</span></div>
      </section>

      <section className="destination-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DATELE PROIECTULUI</p>
            <h2>Destinații</h2>
          </div>
          <span className="hint">Rezultatele complete sunt în consola browserului.</span>
        </div>
        <div className="cards">
          {destinatii.map((destinatie) => (
            <article
              className={`card ${destinatie.vizitat ? 'visited' : ''}`}
              key={destinatie.id}
              onClick={() => setSelectedId(destinatie.id)}
            >
              <div className="card-top">
                <span className="status">{destinatie.vizitat ? 'Vizitat' : 'De vizitat'}</span>
                <span>{destinatie.zile} zile</span>
              </div>
              <h3>{destinatie.oras}</h3>
              <p>{destinatie.tara}</p>
              {selectedId === destinatie.id && <small>{formatDestinatie(destinatie)}</small>}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
