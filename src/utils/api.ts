import { OpenZaakPagination, Zaak } from '@/model/openzaak'

/**
 * Collection of functions to used to make requests to the Open Zaak API gateway.
 */
export abstract class OpenZaakApi {
  /**
   * Makes a GET request to the Open Zaak gateway API.
   * @throws {Error} When the response is not ok, will thow an Error with the status text.
   * @example <caption>This example will get a paginated list of zaken from the API.</caption>
   * ```ts
   * const token = sessionStorage.getItem('token')
   * OpenZaakApi.get<OpenZaakPagination<Zaak[]>>('/zaken', token)
   *    .then(console.log)
   *    .catch(console.error)
   * ```
   * @param uri URI which will be appended to the URL set in .env.*
   * @param token Bearer auth token, without the Bearer prefix
   * @returns {Promise<T>} result from the API request
   */
  private static async get<T>(uri: string, token: string): Promise<T> {
    const url = new URL(uri, process.env.API_URL).href
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

  /**
   * Makes a request GET to Open Zaak gateway API to retrieve a list of _zaken_
   * @returns {Promise<OpenZaakPagination<Zaak[]>>} Promise of paginated list of _zaken_
   */
  public static async getZaken(): Promise<OpenZaakPagination<Zaak[]>> {
    const token = sessionStorage.getItem('token') // FIXME: this should definitly not happen here
    return this.get<OpenZaakPagination<Zaak[]>>('/zaken', token)
  }
}
