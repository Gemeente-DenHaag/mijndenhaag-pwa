import React from 'react'

import Card from '@gemeente-denhaag/nlds-react-components/surfaces/card/Card'
import CardHeader from '@gemeente-denhaag/nlds-react-components/surfaces/cardheader/CardHeader'
import CardContent from '@gemeente-denhaag/nlds-react-components/surfaces/cardcontent/CardContent'
import Typography from '@gemeente-denhaag/nlds-react-components/datadisplay/typography/Typography'
import CardActions from '@gemeente-denhaag/nlds-react-components/surfaces/cardactions/CardActions'
import Container from '@gemeente-denhaag/nlds-react-components/layout/container/Container'
import Button from '@gemeente-denhaag/nlds-react-components/input/button/Button'
import { PageProps } from 'gatsby'

// Placeholder since this is currently not in the nlds library
const Icon: React.FC<PageProps> = (data) => {
  return <p>IconPlaceholder</p>
}

// Placeholder since this is currently not in the nlds library
const CardMedia: React.FC<PageProps> = (data) => {
  return <p>CardMediaPlaceholder</p>
}

// The structure of the mockdata in the mockserver
interface ComponentData {
  type: string
  attributes: any
  children?: Array<ComponentData | string>
}

// Object to map strings to React Components
let componentMap = {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Container,
  Icon,
  CardMedia,
  Button
}

function parser(components: ComponentData[]): React.CElement<any, any>[] {
  let result = []

  components.forEach((component) => {
    let children = component.children.map((component) => {
      if (typeof component === 'string') {
        return component
      } else {
        return parseComponent(component)
      }
    })
    result.push(
      React.createElement(
        componentMap[component.type],
        component.attributes,
        children
      )
    )
  })
  return result
}

function parseComponent(component: ComponentData) {
  let children = []

  if (component.children) {
    children = component.children.map((component) => {
      if (typeof component === 'string') {
        return component
      } else {
        return parseComponent(component)
      }
    })
  }

  return React.createElement(
    componentMap[component.type],
    component.attributes,
    children
  )
}

export default parser
