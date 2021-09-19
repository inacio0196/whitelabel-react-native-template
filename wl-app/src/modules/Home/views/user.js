import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../../theme';

export default function User() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>UserScreen</Text>
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
  text: {
    color: theme.colors.accent,
    fontSize: 40,
    fontWeight: 'bold',
  },
});
