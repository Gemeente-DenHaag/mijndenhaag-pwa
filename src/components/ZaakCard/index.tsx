import React from 'react'
import { Zaak, Status } from '@/types'
import Card from '@gemeente-denhaag/card/Card'
import CardContent from '@gemeente-denhaag/cardcontent/CardContent'
import CardActions from '@gemeente-denhaag/cardactions/CardActions'
import Typography from '@gemeente-denhaag/typography/Typography'
import Button from '@gemeente-denhaag/button/Button'

interface ZaakCardData {
  zaak: Zaak
}

interface ZaakCardProps {
  title: string
  subtitle?: string
  date: string
  children?: React.ReactNode
}

const ZaakCard: React.FC<ZaakCardProps> = ({
  title,
  subtitle,
  date,
  children
}) => (
  <Card>
    <CardContent>
      <Typography variant='h6'>{title}</Typography>
      {subtitle && (
        <Typography variant='subtitle1' gutterBottom>
          {subtitle}
        </Typography>
      )}
      {children}
      <Typography variant='body1'>{date}</Typography>
    </CardContent>
    <CardActions>
      <Button>→</Button>
    </CardActions>
  </Card>
)

const ZaakStatus: React.FC = () => <div></div>

const LopendeZaakCard: React.FC<ZaakCardData> = ({ zaak }) => (
  <ZaakCard title={zaak.omschrijving} date={zaak.startdatum}>
    <ZaakStatus></ZaakStatus>
  </ZaakCard>
)

export default LopendeZaakCard
