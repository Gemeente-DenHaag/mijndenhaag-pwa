import React from 'react';

import List from '@gemeente-denhaag/nlds-react-components/datadisplay/list/List';
import ListItemIcon from '@gemeente-denhaag/nlds-react-components/datadisplay/listitemicon/ListItemIcon';
import ListItem from '@gemeente-denhaag/nlds-react-components/datadisplay/listitem/ListItem';
import ListItemText from '@gemeente-denhaag/nlds-react-components/datadisplay/listitemtext/ListItemText';


import Icon, { HambugerIcon, ArchiveIcon, MapIcon, InboxIcon, FileTextIcon } from "./icons";
interface NavigationItem {
  icon: React.FC;
  name: string;
  stroke?: string;
}

const buildNavigation = (navigationItems: NavigationItem[]): React.ReactElement[] => {
  return navigationItems.map<React.ReactElement>(item =>
  (<ListItem>
    <ListItemIcon><Icon icon={item.icon} stroke={item.stroke} /></ListItemIcon>
    <ListItemText>{item.name}</ListItemText>
  </ListItem>)
  );
}

const SideNavigation: React.FC = () => (
  <List>
    {buildNavigation([
      { "name": "Overzicht", "icon": HambugerIcon, "stroke": "black" },
      { "name": "Lopende zaken", "icon": ArchiveIcon, "stroke": "black" },
      { "name": "Mijn producten", "icon": FileTextIcon, "stroke": "black" },
      { "name": "Mijn wijk", "icon": MapIcon, "stroke": "black" },
      { "name": "Meldingen", "icon": InboxIcon, "stroke": "black" }
    ])}
  </List>
);

export default SideNavigation;