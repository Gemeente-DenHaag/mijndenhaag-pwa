import React from 'react'
import { Link } from 'gatsby'

import ListItemText from '@gemeente-denhaag/listitemtext/ListItemText'

import ListItem from '@gemeente-denhaag/listitem/ListItem'
import List from '@gemeente-denhaag/list/List'

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

const buildNavigation = (
  navigationItems: NavigationItem[]
): React.ReactElement[] => {
  return navigationItems.map<React.ReactElement>((item, i) => (
    <Link to={item.to} partiallyActive={true}>
      <ListItem key={i}>
        <Icon
          icon={item.icon}
          style={{ marginRight: '17px' }}
          ariaLabel={`${item.name} icon`}
        />
        <ListItemText>{item.name}</ListItemText>
      </ListItem>
    </Link>
  ))
}

const SideNavigation: React.FC = () => (
  <List>
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
