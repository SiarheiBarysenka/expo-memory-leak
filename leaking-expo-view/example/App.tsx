import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import { LeakingView } from 'leaking-expo-view';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button
      title="Navigate to LeakingView"
      onPress={() => navigation.navigate('LeakingView')}
    />
  </View>
);

const LeakingViewScreen = ({ navigation }) => (
  <LeakingView style={{ flex:1 }} />
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LeakingView" component={LeakingViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';


// const HomeScreen = ({ navigate }) => (
//   <View>
//     <Button title="Go to Leaking View" onPress={() => navigate('Details')} />
//   </View>
// );

// const DetailsScreen = ({ navigate }) => (
//   <View>
//     <Button title="Go Back" onPress={() => navigate('Home')} />
//     <LeakingView />
//   </View>
// );

// const App = () => {
//   const [currentScreen, setCurrentScreen] = useState('Home');

//   const navigate = (screenName) => {
//     setCurrentScreen(screenName);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {currentScreen === 'Home' && <HomeScreen navigate={navigate} />}
//       {currentScreen === 'Details' && <DetailsScreen navigate={navigate} />}
//     </View>
//   );
// };

// export default App;