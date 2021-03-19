import React from 'react'
import Card from '@gemeente-denhaag/card/Card'
import CardContent from '@gemeente-denhaag/cardcontent/CardContent'
import CardActions from "@gemeente-denhaag/cardactions/CardActions";
import Typography from '@gemeente-denhaag/typography/Typography'
import Button from '@gemeente-denhaag/button/Button'
import Stepper from '@gemeente-denhaag/stepper/Stepper'
import Step from '@gemeente-denhaag/step/Step'
import StepLabel from '@gemeente-denhaag/steplabel/StepLabel'

import { ZaakCardProps, ZaakCardWrapperProps, ZaakStatusesProps } from './types'
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

const ZaakCardWrapper: React.FC<ZaakCardWrapperProps> = ({
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
      <CardActions>
        <Typography variant='body1'>{formatDate(date, locale)}</Typography>
        <Button>-></Button>
      </CardActions>     
    </CardContent>
  </Card>
)

const ZaakStatus: React.FC<ZaakStatusesProps> = ({
  statuses,
  currentStatus
}) => {
  statuses.sort((a, b) => a.index - b.index)

  return (
    <Stepper activeStep={currentStatus}>
      {statuses.map((status: { index: React.Key; description: any }) => (
        <Step key={status.index}>
          <StepLabel>
            {status.index !== currentStatus && status.description}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export const ZaakCard: React.FC<ZaakCardProps> = ({ zaak, zaakStatussen }) => (
  <ZaakCardWrapper title={zaak.title} date={zaak.date} locale={zaak.locale}>
    {zaakStatussen && (
      <ZaakStatus
        statuses={zaakStatussen.statuses}
        currentStatus={zaakStatussen.currentStatus}
      ></ZaakStatus>
    )}
  </ZaakCardWrapper>
)

export default ZaakCard
export * from './types'
