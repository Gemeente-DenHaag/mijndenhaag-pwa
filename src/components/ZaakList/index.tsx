import React, { useEffect, useState } from 'react'
import Button from '@gemeente-denhaag/button'
import Typography from '@gemeente-denhaag/typography'

import ZaakCard, { ZaakCardProps } from '@/components/ZaakCard'
import { ZaakListProps, ZaakListWrapperProps } from './types'
import { Zaak } from '@/types'

const ZaakListWrapper = ({
  headerText,
  loadMoreText,
  listEmptyText,
  children = [],
  minAmountOfChildren = 4
}: ZaakListWrapperProps) => {
  const [isCollapsed, setCollapsed] = useState(true)
  let zaakCardElements: React.ReactElement<ZaakCardProps>[] = Array.isArray(
    children
  )
    ? children
    : [children]

  useEffect(() => {
    setCollapsed(zaakCardElements.length > minAmountOfChildren)
  }, [zaakCardElements])

  return (
    <div>
      <Typography variant='h5'>{headerText}</Typography>
      {zaakCardElements.length == 0 && (
        <Typography variant='body1'>{listEmptyText}</Typography>
      )}
      {isCollapsed
        ? zaakCardElements.slice(0, minAmountOfChildren)
        : zaakCardElements}
      {isCollapsed && (
        <Button onClick={() => setCollapsed(false)}>{loadMoreText}</Button>
      )}
    </div>
  )
}

const ActiveZaakList: React.FC<ZaakListProps> = ({
  headerText,
  loadMoreText,
  listEmptyText,
  minAmountOfChildren = 4
}: ZaakListProps) => {
  const [zaken, setZaken] = useState<Zaak[]>([])

  useEffect(() => {
    setZaken([]) //TODO connect to API
  }, [])

  return (
    <ZaakListWrapper
      headerText={headerText}
      loadMoreText={loadMoreText}
      listEmptyText={listEmptyText}
      minAmountOfChildren={minAmountOfChildren}
    >
      {zaken.map<React.ReactElement>((zaak) => (
        <ZaakCard date={zaak.startdatum} title={zaak.omschrijving}></ZaakCard>
      ))}
    </ZaakListWrapper>
  )
}

//TODO: put archived zaken here

export default ActiveZaakList
export * from './types'
