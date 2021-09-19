import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import modules from '../modules';
import theme from '../theme';

function MainScreen() {
  const navigation = useNavigation();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={styles.container}>
      <Text style={styles.title}>WhiteLabel React-Native</Text>
      {modules.map(module => (
        <TouchableOpacity
          key={module.id}
          style={styles.button}
          onPress={() => navigation.navigate(module.initialRouteName)}>
          <Text style={styles.text}>Go to {module.id}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background1,
  },
  button: {
    backgroundColor: theme.colors.accent,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  text: {
    color: theme.colors.text1,
    fontSize: 40,
  },
  title: {
    color: theme.colors.accent,
    fontSize: 30,
  },
});

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        {modules
          ?.map(module => module.routes)
          ?.flat()
          ?.map(screen => (
            <Stack.Screen
              key={screen.id}
              name={screen.title}
              component={screen.component}
            />
          ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
