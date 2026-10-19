const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function parseResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }

  return response.json()
}

export async function fetchUsers() {
  return parseResponse(await fetch(API_URL))
}

export async function fetchUserById(id) {
  return parseResponse(await fetch(`${API_URL}/${id}`))
}
