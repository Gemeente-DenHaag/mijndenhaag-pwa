import React, { useState } from 'react'

import Typography from '@gemeente-denhaag/typography'
import Button from '@gemeente-denhaag/button'

import { ZaakListProps } from './types'
import { ZaakCardProps } from '@/components/ZaakCard'

export const ZaakList = ({
  headerText,
  loadMoreText,
  listEmptyText,
  children = [],
  minAmountOfChildren = 4
}: ZaakListProps) => {
  if (!Array.isArray(children)) {
    children = [children]
  }

  const [isCollapsed, setCollapsed] = useState(
    children.length > minAmountOfChildren
  )

  return (
    <div>
      <Typography variant='h5'>{headerText}</Typography>
      {children.length == 0 && (
        <Typography variant='body1'>{listEmptyText}</Typography>
      )}
      {isCollapsed ? children.slice(0, minAmountOfChildren) : children}
      {isCollapsed && (
        <Button onClick={() => setCollapsed(false)}>{loadMoreText}</Button>
      )}
    </div>
  )
}

export default ZaakList
export * from './types'
