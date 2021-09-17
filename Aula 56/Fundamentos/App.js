import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ComponenteControlado } from './components/ComponenteControlado';
import { ComponentePai } from './components/ComponentePai';
import { PrimeiroComponente } from './components/PrimeiroComponente';
import { SegundoComponente } from './components/SegundoComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <PrimeiroComponente />
      <SegundoComponente />      
      <ComponentePai>
        <Text>Esse texto é um filho do componente</Text>
      </ComponentePai>
      <ComponenteControlado />
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
