import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  count: {
    fontSize: 80,
    fontWeight: '600'
  },
  button: {
    fontSize: 40,
    fontWeight: '700',
    width: 100,
    height: 100
  },
  actions: {
    flex: 1,
    justifyContent: 'center'
  }
});

const Example: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);

  const increment = () => setCount((prevValue) => prevValue + 1);
  const decrement = () => setCount((prevValue) => prevValue - 1);
  const reset = () => setCount(0);

  return (
    <View style={styles.root}>
      <Text style={styles.text}>This is my first app in React Native</Text>
      <Text style={styles.text}>Simple counter</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.actions}>
        <View style={styles.button}>
          <Button onPress={increment} title="+" />
        </View>
        <View style={styles.button}>
          <Button onPress={decrement} title="-" />
        </View>
        <View style={styles.button}>
          <Button onPress={reset} title="Reset Counter" />
        </View>
      </View>
    </View>
  );
};

export default Example;
