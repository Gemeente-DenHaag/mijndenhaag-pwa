import React from 'react'
import { PageProps } from 'gatsby'

import Title from '@/components/Title'

const Home: React.FC<PageProps> = ({pageContext}) => {
  return (
    <main>
      <Title />
    </main>
  )
}

export default Home
