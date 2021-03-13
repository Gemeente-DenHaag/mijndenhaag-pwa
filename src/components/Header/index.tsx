import React from 'react'

// @ts-ignore   This is not a regular component, which ts doesn't like
import imageFile from '../assets/logo.svg'
import Grid from '@gemeente-denhaag/grid/Grid'
import FormControl from '@gemeente-denhaag/formcontrol/FormControl'
import Select from '@gemeente-denhaag/select/Select'
import Divider from '@gemeente-denhaag/divider/Divider'
import TextField from '@gemeente-denhaag/textfield/TextField'
import MenuItem from '@gemeente-denhaag/menuitem/MenuItem'
import Button from '@gemeente-denhaag/button/Button'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew'

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

interface LanguageButtonProps {
  language: string
  handleChange: (
    event: React.ChangeEvent<{ name?: string; value: string }>,
    child: React.ReactNode
  ) => void
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  language,
  handleChange
}) => (
  <FormControl>
    <Select
      labelId='default-select-label'
      value={language}
      onChange={handleChange}
    >
      <MenuItem value={'NL'}>NL</MenuItem>
      <MenuItem value={'EN'}>EN</MenuItem>
    </Select>
  </FormControl>
)

const AccesibilityButton: React.FC = () => (
  <Button>
    <AccessibilityNewIcon />
  </Button>
)

interface RightNav {
  languageButtonProps: LanguageButtonProps
}

const RightNav: React.FC<RightNav> = ({ languageButtonProps }) => (
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
      <LanguageButton {...languageButtonProps} />
    </Grid>
  </Grid>
)

const Header: React.FC = () => {
  const [language, setLanguage] = React.useState('NL')
  const handleLanguageChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setLanguage(event.target.value as string)
  }

  return (
    <Grid container justify='space-between'>
      <Grid item xs>
        <LeftNav />
        <Divider variant='fullWidth' />
      </Grid>
      <Grid item xs={2}>
        <Logo />
      </Grid>
      <Grid item xs>
        <RightNav
          languageButtonProps={{ language, handleChange: handleLanguageChange }}
        />
        <Divider variant='fullWidth' />
      </Grid>
    </Grid>
  )
}

export default Header
