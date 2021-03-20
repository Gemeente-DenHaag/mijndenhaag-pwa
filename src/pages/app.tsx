import React from 'react'
import { Router, Link } from '@reach/router'
import ZaakList from '@/components/ZaakList'
const App = () => (
  <Router>
    <ZaakList
      headerText='bla'
      listEmptyText='no items'
      loadMoreText='bla'
      path='/app/zaken'
    >
      <p>test</p>
    </ZaakList>
  </Router>
)

export default App
