import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Accordion } from './src/components/Accordion';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Accordion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
