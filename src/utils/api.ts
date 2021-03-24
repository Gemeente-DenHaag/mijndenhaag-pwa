export abstract class OpenZaakApi {
  public static async Get<T>(uri: string, token: string): Promise<T> {
    const url = new URL(process.env.API_URL, uri).href
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json()
  }
}
