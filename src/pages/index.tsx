import React from 'react'
import { PageProps } from 'gatsby'

import { Button } from '@gemeente-denhaag/nlds-react-components/input/button/Button'
import { ButtonGroup } from '@gemeente-denhaag/nlds-react-components/input/buttongroup/ButtonGroup'
import { Checkbox } from '@gemeente-denhaag/nlds-react-components/input/checkbox/Checkbox'
import { FormControlLabel } from '@gemeente-denhaag/nlds-react-components/input/formcontrollabel/FormControlLabel'
import { FormGroup } from '@gemeente-denhaag/nlds-react-components/input/formgroup/FormGroup'
import { Typography } from '@gemeente-denhaag/nlds-react-components/datadisplay/typography/Typography'
import { Container } from '@gemeente-denhaag/nlds-react-components/layout/container/Container'
import { Grid } from '@gemeente-denhaag/nlds-react-components/layout/grid/Grid'

import Stepper from '@gemeente-denhaag/nlds-react-components/navigation/stepper/Stepper'
import Step from '@gemeente-denhaag/nlds-react-components/navigation/step/Step'
import StepLabel from '@gemeente-denhaag/nlds-react-components/navigation/steplabel/StepLabel'
import StepContent from '@gemeente-denhaag/nlds-react-components/navigation/stepcontent/StepContent'
import Header from '@/components/header'

const Home: React.FC<PageProps> = () => (
  <main>
    <Container maxWidth='lg'>
      <Header />
      <Grid container direction={'column'} justify='space-between' spacing={8}>
        <Grid item>
          <Typography align='inherit' variant='h5'>
            Test page
          </Typography>
          <Typography align='inherit' variant='subtitle1'>
            With components from the nlds-react-components library
          </Typography>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <Button variant='contained' color='primary'>
              Hello world
            </Button>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <Button>Button</Button>
              <Button color='primary'>I am primary coloured.</Button>
              <Button size='large'>I am size large.</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox color={'primary'} checked={true} />}
              label='Imports the nlds-react-components library'
              labelPlacement='end'
            />
            <FormControlLabel
              control={<Checkbox color={'primary'} checked={true} />}
              label='Statically build'
              labelPlacement='end'
            />
          </FormGroup>
        </Grid>
        <Grid item>
          <Stepper activeStep={0} orientation='vertical'>
            <Step>
              <StepLabel>
                <p>First Step in a Stepper!</p>
              </StepLabel>
              <StepContent>
                <p>
                  This is the first Step component of many in a Stepper
                  component.
                </p>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <p>Second Step in a Stepper!</p>
              </StepLabel>
              <StepContent>
                <p>
                  This is the second Step component of many in a Stepper
                  component.
                </p>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <p>Third Step in a Stepper!</p>
              </StepLabel>
              <StepContent>
                <p>
                  This is the third Step component of many in a Stepper
                  component.
                </p>
              </StepContent>
            </Step>
          </Stepper>
        </Grid>
      </Grid>
    </Container>
  </main>
)

export default Home
