import React from 'react'
import { ZaakCardProps } from '@/components/ZaakCard'

export interface ZaakListWrapperProps extends ZaakListProps {
  /**
   * All _zaken_ in to display in the overview
   */
  children?:
    | React.ReactElement<ZaakCardProps>[]
    | React.ReactElement<ZaakCardProps>
}

export interface ZaakListProps {
  /**
   * Text for the header
   */
  headerText: string
  /**
   * Text to display when list is empty.
   */
  listEmptyText: string
  /**
   * Text for the load more button.
   */
  loadMoreText: string
  /**
   * Amount of children to display in a collapsed state.
   */
  minAmountOfChildren?: number
}
