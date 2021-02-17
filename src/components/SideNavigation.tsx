import React from 'react';
import { Link } from "gatsby"

import List from '@gemeente-denhaag/nlds-react-components/datadisplay/list/List';
import ListItemIcon from '@gemeente-denhaag/nlds-react-components/datadisplay/listitemicon/ListItemIcon';
import ListItem from '@gemeente-denhaag/nlds-react-components/datadisplay/listitem/ListItem';
import ListItemText from '@gemeente-denhaag/nlds-react-components/datadisplay/listitemtext/ListItemText';

import Icon, { HambugerIcon, ArchiveIcon, MapIcon, InboxIcon, FileTextIcon } from "./icons";

interface NavigationItem {
  icon: React.FC;
  name: string;
  to: string;
  color?: string;
}

const buildNavigation = (navigationItems: NavigationItem[]): React.ReactElement[] => {
  return navigationItems.map<React.ReactElement>(item => (
    <Link to="#">
      <ListItem>
        <ListItemIcon><Icon icon={item.icon} color={item.color} /></ListItemIcon>
        <ListItemText>{item.name}</ListItemText>
      </ListItem>
    </Link>
  ));
}

const SideNavigation: React.FC = () => (
  <List>
    {buildNavigation([
      { "name": "Overzicht", "icon": HambugerIcon, "to": "#" },
      { "name": "Lopende zaken", "icon": ArchiveIcon, "to": "#" },
      { "name": "Mijn producten", "icon": FileTextIcon, "to": "#" },
      { "name": "Mijn wijk", "icon": MapIcon, "to": "#" },
      { "name": "Meldingen", "icon": InboxIcon, "to": "/", "color": "#1261A3" }
    ])}
  </List>
);

export default SideNavigation;