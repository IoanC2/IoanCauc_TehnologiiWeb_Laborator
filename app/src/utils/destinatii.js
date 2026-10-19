export function getOrase(list) {
  return list.map(({ oras }) => oras)
}

export function getNevizitate(list) {
  return list.filter(({ vizitat }) => !vizitat)
}

export function totalZile(list) {
  return list.reduce((total, { zile }) => total + zile, 0)
}

export function formatDestinatie({ oras, tara, zile, vizitat }) {
  return `${vizitat ? '[x]' : '[ ]'} ${oras}, ${tara} (${zile} ${zile === 1 ? 'zi' : 'zile'})`
}

export function numarPeTara(list) {
  return list.reduce((total, { tara }) => ({
    ...total,
    [tara]: (total[tara] ?? 0) + 1,
  }), {})
}

export function sortDupaZile(list) {
  return [...list].sort((a, b) => b.zile - a.zile)
}

export function marcheazaVizitat(list, id) {
  return list.map((destinatie) => (
    destinatie.id === id
      ? { ...destinatie, vizitat: !destinatie.vizitat }
      : destinatie
  ))
}

export function adaugaDestinatie(list, destinatie) {
  return [...list, destinatie]
}

export function stergeDestinatie(list, id) {
  return list.filter((destinatie) => destinatie.id !== id)
}
