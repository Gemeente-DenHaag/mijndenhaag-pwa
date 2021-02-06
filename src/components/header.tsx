import React from 'react'
import { AppBar } from '@gemeente-denhaag/nlds-react-components/surfaces/appbar/AppBar'
import { Button } from '@gemeente-denhaag/nlds-react-components/input/button/Button'

// @ts-ignore   This is not a regular component, which ts doesn't like
import imageFile from '../assets/logo.svg'
import Grid from '@gemeente-denhaag/nlds-react-components/layout/grid/Grid'
import FormControl from '@gemeente-denhaag/nlds-react-components/input/formcontrol/FormControl'
import Select from '@gemeente-denhaag/nlds-react-components/input/select/Select'
import Divider from '@gemeente-denhaag/nlds-react-components/datadisplay/divider/Divider'
import TextField from '@gemeente-denhaag/nlds-react-components/input/textfield/TextField'

const Header: React.FC = () => (
  <AppBar position='static' color='transparent'>
    <Grid container justify='space-between'>
      <Grid item xs>
        <LeftNav />
        <Divider variant='fullWidth' />
      </Grid>
      <Grid item xs={2}>
        <Logo />
      </Grid>
      <Grid item xs>
        <RightNav />
        <Divider variant='fullWidth' />
      </Grid>
    </Grid>
  </AppBar>
)

const Logo: React.FC = () => (
  <Grid container justify='center'>
    <img
      src={imageFile}
      alt='The Hague municipality emblem'
      width={150}
      height={150}
    />
  </Grid>
)

const LeftNav: React.FC = () => (
  <Grid container justify='flex-start'>
    <Grid item>
      <Button>Burgers</Button>
    </Grid>
    <Grid item>
      <Button>Ondernemers</Button>
    </Grid>
  </Grid>
)

const RightNav: React.FC = () => (
  <Grid container alignItems='center' justify='flex-end' spacing={1}>
    <Grid item>
      <TextField label='Zoeken'>Text</TextField>
    </Grid>
    <Grid item>
      <Button variant='contained'>Welkom Anne</Button>
    </Grid>
    <Grid item>
      <AccesibilityButton />
    </Grid>
    <Grid item>
      <LanguageButton />
    </Grid>
  </Grid>
)

// Currently this Component is using native select options due to issue #19
const LanguageButton: React.FC = () => (
  <FormControl>
    <Select labelId='default-select-label' native>
      <option value={'NL'}>NL</option>
      <option value={'BE'}>BE</option>
      <option value={'DE'}>DE</option>
    </Select>
  </FormControl>
)

// Currently this Component is using native select options due to issue #19 and #21
const AccesibilityButton: React.FC = () => (
  <FormControl>
    <Select labelId='default-select-label' native>
      {/* Should be replaced with MenuItems with ListItemIcons */}
      <option>A</option>
      <option>A</option>
      <option>A</option>
    </Select>
  </FormControl>
)

export default Header
