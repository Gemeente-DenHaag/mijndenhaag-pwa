import React from 'react'

// datadisplay
import {
  Avatar,
  AvatarGroup,
  Badge,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Typography
} from '@gemeente-denhaag/datadisplay'

// input
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField
} from '@gemeente-denhaag/input'

// layout
import {
  Box,
  Container,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Hidden
} from '@gemeente-denhaag/layout'

// navigation
import {
  Drawer,
  Menu,
  MenuItem,
  MenuList,
  MobileStepper,
  Popover,
  Popper,
  Step,
  StepButton,
  StepIcon,
  StepLabel,
  Stepper,
  SwipeableDrawer,
  Tab,
  TabContext,
  TabList,
  TabScrollButton
} from '@gemeente-denhaag/navigation'

// surfaces
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Paper,
  Toolbar
} from '@gemeente-denhaag/surfaces'

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
const componentMap = {
  Card, Avatar, AvatarGroup, Badge, Divider, List,
  CardHeader, ListItem, ListItemAvatar, ListItemIcon,
  ListItemSecondaryAction, ListItemText, ListSubheader,
  CardContent, ButtonGroup, Checkbox, FormControl,
  FormControlLabel, FormGroup, IconButton, InputLabel,
  Typography, Radio, RadioGroup, Select, Switch, TextField,
  Box, Container, Grid, GridList, GridListTile, GridListTileBar,
  Hidden, Drawer, Menu, MenuItem, MobileStepper, Popover,
  Popper, Step, StepButton, StepIcon, StepLabel, Stepper,
  SwipeableDrawer, Tab, TabContext, TabList, TabScrollButton,
  CardActions, Accordion, AccordionDetails, AccordionSummary,
  AppBar, Paper, Toolbar, Icon, CardMedia, Button, MenuList
}

const parser = (components: ComponentData[]): React.CElement<any, any>[] => {
  return components.map((component, i) => parseComponent(component, i))
}

function parseComponent(
  component: ComponentData,
  key: number
): React.CElement<any, any> {
  let children = []

  if (component.children) {
    children = component.children.map((component, i) => {
      if (typeof component === 'string') {
        return component
      } else {
        return parseComponent(component, i)
      }
    })
  }

  if (!componentMap.hasOwnProperty(component.type)) {
    console.log(`${component.type} is not available in the componentMap`)
    return <p>Placeholder for missing component</p>
  } else {
    return React.createElement(
      componentMap[component.type],
      { key, ...component.attributes },
      children
    )
  }
}

export default parser
