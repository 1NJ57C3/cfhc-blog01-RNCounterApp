import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

function App() {
  const [count, setCount] = useState(0);

  function handlePress() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.counterContainer}>
        <Text style={[styles.text, styles.bigText]}>
          This Button has been pressed {count} times.
        </Text>
      </View>
      <>
        <TouchableOpacity onPress={handlePress} style={styles.button.container}>
          <Text style={styles.button.text}>Button</Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    padding: '5%',
  },
  text: {
    textAlign: 'center',
    color: 'whitesmoke',
  },
  bigText: {
    fontSize: 30,
  },
  button: {
    container: {
      backgroundColor: 'dodgerblue',
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: 8,
    },
    text: {
      textAlign: 'center',
      color: 'whitesmoke',
      fontSize: 30,
      padding: 15,
    },
  },
});
