/**
 * This file is just to alias the types in the schema.ts. To save some typing :P
 */
import { components as zaak_components } from './zaak_schema'
import { components as catalogi_components } from './catalogi_schema'

export type Zaak = zaak_components['schemas']['Zaak']
export type Status = zaak_components['schemas']['Status']

export type StatusType = catalogi_components['schemas']['StatusType']
