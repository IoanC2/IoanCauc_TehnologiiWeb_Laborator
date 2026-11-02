export default function DestinatieCard({ destinatie, onToggle, onDelete }) {
  const { id, oras, tara, zile, vizitat, descriere, atractii } = destinatie

  return (
    <article className={vizitat ? 'card vizitat' : 'card'}>
      <h3>{oras}</h3>
      <p className="tara">{tara}</p>
      <p className="zile">{zile} zile</p>
      {descriere && <p className="descriere">{descriere}</p>}
      {atractii && (
        <>
          <h4>Atracții turistice</h4>
          <ul className="atractii">
            {atractii.map((atractie) => <li key={atractie}>{atractie}</li>)}
          </ul>
        </>
      )}
      <button type="button" onClick={() => onToggle(id)}>
        {vizitat ? 'Vizitat' : 'Marchează vizitat'}
      </button>
      <button type="button" onClick={() => onDelete(id)}>
        Șterge
      </button>
    </article>
  )
}
