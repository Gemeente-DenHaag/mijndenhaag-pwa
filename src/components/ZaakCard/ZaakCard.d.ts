interface ZaakCardData {
  /**
   * zaak to display
   */
  zaak: ZaakCardProps
  /**
   * all possible statussen of the zaak and its current status
   */
  zaakStatussen?: ZaakStatussenProps
}

/**
 *
 */
interface ZaakCardProps {
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
  /**
   * childeren of the card
   */
  children?: React.ReactNode
}

interface ZaakStatus {
  /**
   * description of the zaak status
   */
  description: string
  /**
   * order number of status (one-indexed)
   */
  index: number
}

interface ZaakStatussenProps {
  /**
   * list of statussen
   */
  statussen: ZaakStatus[]
  /**
   * index of the current status
   */
  currentStatus: number
}
