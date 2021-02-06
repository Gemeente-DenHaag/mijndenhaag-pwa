import React from 'react'
import { Button } from '@gemeente-denhaag/nlds-react-components/input/button/Button'

import Grid from '@gemeente-denhaag/nlds-react-components/layout/grid/Grid'
import Divider from '@gemeente-denhaag/nlds-react-components/datadisplay/divider/Divider'
import { Link } from 'gatsby'

const TopNavigation: React.FC = () => (
  <Grid container justify='center'>
    <Link to='/'>
      <Button>Home</Button>
    </Link>
    <Link to='/404/'>
      <Button>Onderwerpen</Button>
    </Link>
    <Link to='/404/'>
      <Button>Nieuws</Button>
    </Link>
    <Link to='/404/'>
      <Button>Contact</Button>
    </Link>
    <Link to='/404/'>
      <Button>Meer</Button>
    </Link>
    <Divider variant='middle' orientation='vertical' flexItem />
    <Link to='/'>
      <Button>MijnDenHaag</Button>
    </Link>
  </Grid>
)

export default TopNavigation
