import React from 'react'
import Card from '@gemeente-denhaag/card/Card'
import CardContent from '@gemeente-denhaag/cardcontent/CardContent'
import CardActions from "@gemeente-denhaag/cardactions/CardActions";
import Typography from '@gemeente-denhaag/typography/Typography'
import Button from '@gemeente-denhaag/button/Button'

import { ZaakCardProps } from './types'

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

const ZaakCard: React.FC<ZaakCardProps> = ({
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

export default ZaakCard
export * from './types'
