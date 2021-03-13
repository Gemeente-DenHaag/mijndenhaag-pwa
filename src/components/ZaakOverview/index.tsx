import React from 'react'

import Typography from '@gemeente-denhaag/typography'
import Button from '@gemeente-denhaag/button'

import { ZaakCard } from '@/components/ZaakCard'
import { ZaakOverviewProps } from './types'

export const ZaakOverview: React.FC<ZaakOverviewProps> = ({ zaken }) => (
  <div>
    <Typography variant='h4'>Lopende Zaken</Typography>
    {zaken.map((zaak) => (
      <ZaakCard zaak={zaak.zaak} zaakStatussen={zaak.zaakStatussen}></ZaakCard>
    ))}
    <Button>Bekijk meer</Button>
  </div>
)

export default ZaakOverview
export * from './types'
