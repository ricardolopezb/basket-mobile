import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [pressedYes, setPressedYes] = useState(false);

  return (
    <View style={styles.container}>
      <Text>god?</Text>
      <Button title='Si' onPress={() => setPressedYes(true)}></Button>
      <Button title='No' onPress={() => setPressedYes(false)}></Button>
      {pressedYes && <Text>anashei</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
