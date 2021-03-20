import React from 'react'
import { Link } from 'gatsby'

import ListItemText from '@gemeente-denhaag/listitemtext/ListItemText'

//TODO replace this import with our own when
// https://github.com/Gemeente-DenHaag/denhaag-component-library/issues/101  and
// https://github.com/Gemeente-DenHaag/denhaag-component-library/issues/102 are fixed.
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
// import ListItem from '@gemeente-denhaag/listitem/ListItem'
// import List from '@gemeente-denhaag/list/List'

import Icon, {
  HambugerIcon,
  ArchiveIcon,
  MapIcon,
  InboxIcon,
  FileTextIcon
} from '@/components/Icons'

interface NavigationItem {
  icon: React.FC
  name: string
  to: string
}

// TODO Temporary styling, remove when design tokens is done.
// cant set font weight, size and line height, its overriden by MUI
const linkStyles = {
  textDecoration: 'none',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#4B4B4B'
}

// TODO Temporary styling, remove when design tokens is done.
// cant set font weight, size and line height, its overriden by MUI
const activeStyles = {
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#1261A3'
}

const buildNavigation = (
  navigationItems: NavigationItem[]
): React.ReactElement[] => {
  return navigationItems.map<React.ReactElement>((item) => (
    <ListItem
      button
      component={Link}
      to={item.to}
      style={linkStyles}
      activeStyle={activeStyles}
      partiallyActive={true}
      aria-label={`navigation to ${item.name}`}
    >
      <Icon
        icon={item.icon}
        style={{ marginRight: '17px' }}
        ariaLabel={`${item.name} icon`}
      />
      <ListItemText>{item.name}</ListItemText>
    </ListItem>
  ))
}

const SideNavigation: React.FC = () => (
  <List aria-label='Side Navigation' component='nav'>
    {buildNavigation([
      { name: 'Overzicht', icon: HambugerIcon, to: '/' },
      { name: 'Lopende zaken', icon: ArchiveIcon, to: '#' },
      { name: 'Mijn producten', icon: FileTextIcon, to: '#' },
      { name: 'Mijn wijk', icon: MapIcon, to: '#' },
      { name: 'Meldingen', icon: InboxIcon, to: '#' }
    ])}
  </List>
)

export default SideNavigation
