import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import theme from '../../../theme';

const Mocks = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MocksScreen</Text>
      <Button
        onPress={() => navigation.navigate('News')}
        title="go to newsscreen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background1,
  },
  text: {
    color: theme.colors.accent,
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Mocks;
