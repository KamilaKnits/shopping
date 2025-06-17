//import react Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

  //create the navigator
  const Stack = createNativeStackNavigator();

//firebase setup
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import ShoppingLists from './components/ShoppingLists';

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBeBuZwvWkp7qXYEf5lWt_WUFrgOgBmdCM",
    authDomain: "shopping-list-demo-fecad.firebaseapp.com",
    projectId: "shopping-list-demo-fecad",
    storageBucket: "shopping-list-demo-fecad.firebasestorage.app",
    messagingSenderId: "212573450930",
    appId: "1:212573450930:web:95520e7049dc7cd6488fab"
  };
  

  //Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);



  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='ShoppingLists'>
        <Stack.Screen
          name="ShoppingLists"
        >
          {props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;


