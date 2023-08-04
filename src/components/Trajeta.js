import { View, Text, StyleSheet, TouchableOpacity,  } from 'react-native'
import React from 'react';

export default function Card({ title, onPress }) {
  
  return (
    <View>
      <Text style={styles.item}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.delete} onPress={onPress}>Borrar</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10
  },
  delete: {
    width: 60,
    marginTop: -20,
    marginLeft: 14,
    textAlign: 'center',
    backgroundColor: "#232323",
    color: '#fff',
    borderRadius: 10
  },
});
