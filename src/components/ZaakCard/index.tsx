import React from 'react'
import Card from '@gemeente-denhaag/card/Card'
import CardContent from '@gemeente-denhaag/cardcontent/CardContent'
import Typography from '@gemeente-denhaag/typography/Typography'
import Button from '@gemeente-denhaag/button/Button'
import Stepper from '@gemeente-denhaag/stepper/Stepper'
import Step from '@gemeente-denhaag/step/Step'
import StepLabel from '@gemeente-denhaag/steplabel/StepLabel'

import { Link } from 'gatsby'
/**
 * Format a timestamp string to a human readable format. If the locale is not found or `undefined` it will use the
 * default browser locale.
 *
 * **Note**: don't use this function for batch formatting, use `Intl.DateTimeFormat` instead.
 * @param dateStr IETF-compliant RFC 2822 timestamps or ISO 8601 format (ISO format can only be UTC)
 * @param locale IETF BCP 47 language tag
 * @returns human readable date
 */
const formatDate = (dateStr: string, locale?: string): string => {
  return new Date(dateStr).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const ZaakCardWrapper: React.FC<ZaakCardProps> = ({
  title,
  date,
  locale,
  subtitle,
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
      <Typography variant='body1'>{formatDate(date, locale)}</Typography>
      <Button>view more</Button>
    </CardContent>
  </Card>
)

const ZaakStatus: React.FC<ZaakStatussenProps> = ({
  statussen,
  currentStatus
}) => {
  statussen.sort((a, b) => a.index - b.index)

  return (
    <Stepper activeStep={currentStatus}>
      {statussen.map((status) => (
        <Step key={status.index}>
          <StepLabel>
            {status.index !== currentStatus && status.description}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export const ZaakCard: React.FC<ZaakCardData> = ({ zaak, zaakStatussen }) => (
  <ZaakCardWrapper title={zaak.title} date={zaak.date} locale={zaak.locale}>
    {zaakStatussen && (
      <ZaakStatus
        statussen={zaakStatussen.statussen}
        currentStatus={zaakStatussen.currentStatus}
      ></ZaakStatus>
    )}
  </ZaakCardWrapper>
)

export default ZaakCard
