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
      { "name": "Overzicht", "icon": HambugerIcon, "to": "#", "color": "#4B4B4B" },
      { "name": "Lopende zaken", "icon": ArchiveIcon, "to": "#", "color": "#4B4B4B" },
      { "name": "Mijn producten", "icon": FileTextIcon, "to": "#", "color": "#4B4B4B" },
      { "name": "Mijn wijk", "icon": MapIcon, "to": "#", "color": "#4B4B4B" },
      { "name": "Meldingen", "icon": InboxIcon, "to": "#", "color": "#4B4B4B" }
    ])}
  </List>
);

export default SideNavigation;