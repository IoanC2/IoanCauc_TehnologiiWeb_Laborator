import { useState } from 'react'
import { destinatii } from './data/destinatii.js'
import { adaugaDestinatie, getNevizitate, marcheazaVizitat, stergeDestinatie, totalZile } from './utils/destinatii.js'
import FormularDestinatie from './components/FormularDestinatie.jsx'
import ListaDestinatii from './components/ListaDestinatii.jsx'
import Rezumat from './components/Rezumat.jsx'
import './App.css'

function App() {
  const [destinatiiCurente, setDestinatiiCurente] = useState(destinatii)

  function handleToggle(id) {
    setDestinatiiCurente((curent) => marcheazaVizitat(curent, id))
  }

  function handleAdd(destinatie) {
    setDestinatiiCurente((curent) => adaugaDestinatie(curent, destinatie))
  }

  function handleDelete(id) {
    setDestinatiiCurente((curent) => stergeDestinatie(curent, id))
  }

  return (
    <main>
      <h1>City Explorer</h1>
      <Rezumat
        total={destinatiiCurente.length}
        nevizitate={getNevizitate(destinatiiCurente).length}
        zile={totalZile(getNevizitate(destinatiiCurente))}
      />
      <FormularDestinatie onAdd={handleAdd} />
      <ListaDestinatii
        destinatii={destinatiiCurente}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </main>
  )
}

export default App
