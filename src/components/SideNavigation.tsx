import React from 'react';

import List from '@gemeente-denhaag/nlds-react-components/datadisplay/list/List';
import ListItemIcon from '@gemeente-denhaag/nlds-react-components/datadisplay/listitemicon/ListItemIcon';
import ListItem from '@gemeente-denhaag/nlds-react-components/datadisplay/listitem/ListItem';
import ListItemText from '@gemeente-denhaag/nlds-react-components/datadisplay/listitemtext/ListItemText';


import Icon, { HambugerIcon, ArchiveIcon, MapIcon, InboxIcon, FileTextIcon } from "./icons";
interface NavigationItem {
  icon: React.FC;
  name: string;
  color?: string;
}

const buildNavigation = (navigationItems: NavigationItem[]): React.ReactElement[] => {
  return navigationItems.map<React.ReactElement>(item =>
  (<ListItem>
    <ListItemIcon><Icon icon={item.icon} color={item.color} /></ListItemIcon>
    <ListItemText>{item.name}</ListItemText>
  </ListItem>)
  );
}

const SideNavigation: React.FC = () => (
  <List>
    {buildNavigation([
      { "name": "Overzicht", "icon": HambugerIcon },
      { "name": "Lopende zaken", "icon": ArchiveIcon, "color": "white" },
      { "name": "Mijn producten", "icon": FileTextIcon, "color": "white" },
      { "name": "Mijn wijk", "icon": MapIcon, "color": "white" },
      { "name": "Meldingen", "icon": InboxIcon, "color": "white" }
    ])}
  </List>
);

export default SideNavigation;