import React from 'react'
import { PageProps } from 'gatsby'
import parser from '../parser'

import Title from '@/components/Title'

const Home: React.FC<PageProps> = (data) => {
  let components: Array<React.Component> = parser(data.pageContext)
  return (
    <main>
      <Title />
    </main>
  )
}

export default Home
