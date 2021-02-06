import React from 'react'
import { PageProps } from 'gatsby'

import parser from '@/parser'

const Home: React.FC<PageProps> = (data) => {

  let pageContext = data.pageContext as any
  let components: React.CElement<any, any>[] = parser(
    pageContext.components
  )

  return (
    <main>
      {components}
    </main>
  )
}

export default Home
