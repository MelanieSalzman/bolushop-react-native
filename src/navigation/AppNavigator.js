import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeDrawer } from './ShopNavigator';
import { UserContext } from '../context/UserProvider'

const AppNavigator = (props) => {
  /*
  let user = useContext(UserContext);
  
    useEffect(() => {
  
      const items = () => {
        
        return (
          <NavigationContainer>
            <HomeDrawer />
          </NavigationContainer>
        );
      }
      items()
    }, [user.signed]);
  
    return (null);
  */

  return (
    <NavigationContainer>
      <HomeDrawer />
    </NavigationContainer>
  );
};

export default AppNavigator;
