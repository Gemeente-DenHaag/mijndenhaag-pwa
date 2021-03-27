import React, { useEffect, useState } from 'react'
import Button from '@gemeente-denhaag/button'
import Typography from '@gemeente-denhaag/typography'

import ZaakCard, { ZaakCardProps } from '@/components/ZaakCard'
import { ZaakListProps, ZaakListWrapperProps } from './types'
import { Zaak, OpenZaakPagination } from '@/model/openzaak'
import { OpenZaakApi } from '@/utils/api'

const ZaakListWrapper = ({
  headerText,
  loadMoreText,
  listEmptyText,
  children = [],
  minAmountOfChildren = 4
}: ZaakListWrapperProps) => {
  const [isCollapsed, setCollapsed] = useState(true)
  const zaakCardElements: React.ReactElement<ZaakCardProps>[] = Array.isArray(
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
      {zaakCardElements.length === 0 && (
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
    console.log(process.env.API_URL)
    const token = sessionStorage.getItem('token') // FIXME: this should definitly not happen here
    OpenZaakApi.get<OpenZaakPagination<Zaak[]>>('/zaken', token)
      .then((data) => setZaken(data.results))
      .catch(console.error) // TODO: provide some nice error to the user
  }, [])

  return (
    <ZaakListWrapper
      headerText={headerText}
      loadMoreText={loadMoreText}
      listEmptyText={listEmptyText}
      minAmountOfChildren={minAmountOfChildren}
    >
      {zaken.map<React.ReactElement>((zaak) => (
        <ZaakCard
          key={zaak.uuid}
          date={zaak.startdatum}
          title={zaak.omschrijving}
        ></ZaakCard>
      ))}
    </ZaakListWrapper>
  )
}

// TODO: put archived zaken component here

export default ActiveZaakList
export * from './types'
