import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => (
  <View style={style.topo}>
    <Text style={style.texto}>{props.titulo}</Text>
  </View>
);

const style = StyleSheet.create({
  topo: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6ca2f7',
  },
  texto: {
    fontSize: 30,
    color: '#fff',
  },
});

export default Header;
