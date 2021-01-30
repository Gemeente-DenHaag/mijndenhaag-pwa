import React from 'react'

// datadisplay
import Avatar from '@gemeente-denhaag/nlds-react-components/datadisplay/avatar/Avatar'
import AvatarGroup from '@gemeente-denhaag/nlds-react-components/datadisplay/avatargroup/AvatarGroup'
import Badge from '@gemeente-denhaag/nlds-react-components/datadisplay/badge/Badge'
import Divider from '@gemeente-denhaag/nlds-react-components/datadisplay/divider/Divider'
import List from '@gemeente-denhaag/nlds-react-components/datadisplay/list/List'
import ListItem from '@gemeente-denhaag/nlds-react-components/datadisplay/listitem/ListItem'
import ListItemAvatar from '@gemeente-denhaag/nlds-react-components/datadisplay/listitemavatar/ListItemAvatar'
import ListItemIcon from '@gemeente-denhaag/nlds-react-components/datadisplay/listitemicon/ListItemIcon'
import ListItemSecondaryAction from '@gemeente-denhaag/nlds-react-components/datadisplay/listitemsecondaryAction/ListItemSecondaryAction'
import ListItemText from '@gemeente-denhaag/nlds-react-components/datadisplay/listitemtext/ListItemText'
import ListSubHeader from '@gemeente-denhaag/nlds-react-components/datadisplay/listsubheader/ListSubheader'
import Typography from '@gemeente-denhaag/nlds-react-components/datadisplay/typography/Typography'

// input
import Button from '@gemeente-denhaag/nlds-react-components/input/button/Button'
import ButtonGroup from '@gemeente-denhaag/nlds-react-components/input/buttongroup/ButtonGroup'
import Checkbox from '@gemeente-denhaag/nlds-react-components/input/checkbox/Checkbox'
import FormControl from '@gemeente-denhaag/nlds-react-components/input/formcontrol/FormControl'
import FormControlLabel from '@gemeente-denhaag/nlds-react-components/input/formcontrollabel/FormControlLabel'
import FormGroup from '@gemeente-denhaag/nlds-react-components/input/formgroup/FormGroup'
import IconButton from '@gemeente-denhaag/nlds-react-components/input/iconbutton/IconButton'
import InputLabel from '@gemeente-denhaag/nlds-react-components/input/inputlabel/InputLabel'
// import Pickers from '@gemeente-denhaag/nlds-react-components/input/pickers/Picker'
import Radio from '@gemeente-denhaag/nlds-react-components/input/radio/Radio'
import RadioGroup from '@gemeente-denhaag/nlds-react-components/input/radiogroup/RadioGroup'
import Select from '@gemeente-denhaag/nlds-react-components/input/select/Select'
import Switch from '@gemeente-denhaag/nlds-react-components/input/switch/Switch'
import TextField from '@gemeente-denhaag/nlds-react-components/input/textfield/TextField'

// layout
import Box from '@gemeente-denhaag/nlds-react-components/layout/box/Box'
import Container from '@gemeente-denhaag/nlds-react-components/layout/container/Container'
import Grid from '@gemeente-denhaag/nlds-react-components/layout/grid/Grid'
import GridList from '@gemeente-denhaag/nlds-react-components/layout/gridlist/GridList'
import GridListTile from '@gemeente-denhaag/nlds-react-components/layout/gridlisttile/GridListTile'
import GridListTileBar from '@gemeente-denhaag/nlds-react-components/layout/gridlisttilebar/GridListTileBar'
import Hidden from '@gemeente-denhaag/nlds-react-components/layout/hidden/Hidden'

// navigation
import Drawer from '@gemeente-denhaag/nlds-react-components/navigation/drawer/Drawer'
import Menu from '@gemeente-denhaag/nlds-react-components/navigation/menu/Menu'
import MenuItem from '@gemeente-denhaag/nlds-react-components/navigation/menuitem/MenuItem'
import MenuList from '@gemeente-denhaag/nlds-react-components/navigation/menulist/MenuList'
import MobileStepper from '@gemeente-denhaag/nlds-react-components/navigation/mobilestepper/MobileStepper'
import Popover from '@gemeente-denhaag/nlds-react-components/navigation/popover/Popover'
import Popper from '@gemeente-denhaag/nlds-react-components/navigation/popper/Popper'
import Step from '@gemeente-denhaag/nlds-react-components/navigation/step/Step'
import StepButton from '@gemeente-denhaag/nlds-react-components/navigation/stepbutton/StepButton'
import StepIcon from '@gemeente-denhaag/nlds-react-components/navigation/stepicon/StepIcon'
import StepLabel from '@gemeente-denhaag/nlds-react-components/navigation/steplabel/StepLabel'
import Stepper from '@gemeente-denhaag/nlds-react-components/navigation/stepper/Stepper'
import SwipeableDrawer from '@gemeente-denhaag/nlds-react-components/navigation/swipeabledrawer/SwipeableDrawer'
import Tab from '@gemeente-denhaag/nlds-react-components/navigation/tab/Tab'
import TabContext from '@gemeente-denhaag/nlds-react-components/navigation/tabcontext/TabContext'
import TabList from '@gemeente-denhaag/nlds-react-components/navigation/tablist/TabList'
import TabScrollButton from '@gemeente-denhaag/nlds-react-components/navigation/tabscrollbutton/TabScrollButton'

// surfaces
import Accordion from '@gemeente-denhaag/nlds-react-components/surfaces/accordion/Accordion'
import AccordionDetails from '@gemeente-denhaag/nlds-react-components/surfaces/accordiondetails/AccordionDetails'
import AccordionSummary from '@gemeente-denhaag/nlds-react-components/surfaces/accordionsummary/AccordionSummary'
import AppBar from '@gemeente-denhaag/nlds-react-components/surfaces/appbar/AppBar'
import Card from '@gemeente-denhaag/nlds-react-components/surfaces/card/Card'
import CardHeader from '@gemeente-denhaag/nlds-react-components/surfaces/cardheader/CardHeader'
import CardContent from '@gemeente-denhaag/nlds-react-components/surfaces/cardcontent/CardContent'
import CardActions from '@gemeente-denhaag/nlds-react-components/surfaces/cardactions/CardActions'
import Paper from '@gemeente-denhaag/nlds-react-components/surfaces/paper/Paper'
import Toolbar from '@gemeente-denhaag/nlds-react-components/surfaces/toolbar/Toolbar'

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
  ListItemSecondaryAction, ListItemText, ListSubHeader,
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

function parser(components: ComponentData[]): React.CElement<any, any>[] {
  let result = components.map((component, i) => parseComponent(component, i))
  return result
}

function parseComponent(component: ComponentData, key: number): React.CElement<any, any> {
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
    );
  }
}

export default parser
