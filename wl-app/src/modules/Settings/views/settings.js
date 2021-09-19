import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import theme from '../../../theme';

export default function Settings() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SettingsScreen</Text>
      <Button
        onPress={() => navigation.navigate('Wallet')}
        title="go to walletscreen"
      />
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
