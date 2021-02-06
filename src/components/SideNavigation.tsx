import React from 'react';

import List from '@gemeente-denhaag/nlds-react-components/datadisplay/list/List';
import ListItem from '@gemeente-denhaag/nlds-react-components/datadisplay/ListItem/ListItem';
import ListItemText from '@gemeente-denhaag/nlds-react-components/datadisplay/ListItemText/ListItemText';

interface NavigationItem {
  icon: string;
  name: string;
}

const buildNavigation = (navigationItems: NavigationItem[]): React.ReactElement[] => {
  const listItems = navigationItems.map<React.ReactElement>(item => {
    return (
      <ListItem>
        <ListItemText>{item.name}</ListItemText>
      </ListItem>
    );
  }
  );

  return listItems;
}

const SideNavigation: React.FC = () => (
  <List>
    {buildNavigation([{ "name": "test", "icon": "test" }])}
  </List>
);

export default SideNavigation;