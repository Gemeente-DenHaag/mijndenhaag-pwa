/* eslint-disable camelcase */
/**
 * Use this file instead of the schema directly.
 */
import { components as zaak_components } from './zaak_schema'
import { components as catalogi_components } from './catalogi_schema'

export type Zaak = zaak_components['schemas']['Zaak']
export type Status = zaak_components['schemas']['Status']

export type StatusType = catalogi_components['schemas']['StatusType']

export interface OpenZaakPagination<T> {
  count: number
  next?: string | null
  previous?: string | null
  results: T
}
