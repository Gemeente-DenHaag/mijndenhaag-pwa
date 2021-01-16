import React from 'react'
import { PageProps } from 'gatsby'

import parser from '@/parser'

const Home: React.FC<PageProps> = (data) => {
  let pageContext = data.pageContext as any;
  let components: Array<React.Component> = parser(pageContext.content.components)

  return (
    <main>
      <h1>Hello World</h1>
      {components}
    </main>
  )
}

export default Home
