export interface ZaakCardProps {
  /**
   * title of the card
   */
  title: string
  /**
   * IETF-compliant RFC 2822 timestamps or ISO 8601 format (ISO format can only be UTC)
   */
  date: string
  /**
   * optional subtitle of the card
   */
  subtitle?: string
  /**
   * IETF BCP 47 language tag
   */
  locale?: string
}
