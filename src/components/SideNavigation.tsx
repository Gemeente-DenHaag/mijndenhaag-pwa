import React from 'react';

import List from '@gemeente-denhaag/nlds-react-components/datadisplay/list/List';
import ListItem from '@gemeente-denhaag/nlds-react-components/datadisplay/listitem/ListItem';
import ListItemText from '@gemeente-denhaag/nlds-react-components/datadisplay/listitemtext/ListItemText';

interface NavigationItem {
  icon: string;
  name: string;
}

const buildNavigation = (navigationItems: NavigationItem[]): React.ReactElement[] => {
  return navigationItems.map<React.ReactElement>(item =>
  (<ListItem>
    <ListItemText>{item.name}</ListItemText>
  </ListItem>)
  );
}

const SideNavigation: React.FC = () => (
  <List>
    {buildNavigation([{ "name": "test", "icon": "test" }])}
  </List>
);

export default SideNavigation;