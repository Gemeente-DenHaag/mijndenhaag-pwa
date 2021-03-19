import React, { useState } from 'react'

import Typography from '@gemeente-denhaag/typography'
import Button from '@gemeente-denhaag/button'

import { ZaakListProps } from './types'

export const ZaakList: React.FC<ZaakListProps> = ({
  headerText,
  loadMoreText,
  listEmptyText,
  children = [],
  minAmountOfChildren = 4
}) => {
  const amountOfChildren = children.length
  const [isCollapsed, setCollapsed] = useState(
    amountOfChildren > minAmountOfChildren
  )

  return (
    <div>
      <Typography variant='h5'>{headerText}</Typography>
      {amountOfChildren == 0 && (
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
