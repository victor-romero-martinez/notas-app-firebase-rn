import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../config/fb";

export default function Card({ text, id }) {
  // borrar un elemneto
  const onDelete = () => {
    const docRef = doc(db, "notas", id);
    deleteDoc(docRef);
  };

  return (
    <View>
      <Text style={styles.item}>{text}</Text>
      <TouchableOpacity>
        <Text style={styles.delete} onPress={onDelete}>
          Borrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    backgroundColor: "#2a2a40",
    color: '#fff',
    padding: 14,
    marginBottom: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  delete: {
    width: 60,
    marginTop: -20,
    marginLeft: '77%',
    textAlign: "center",
    backgroundColor: "#ff0000",
    color: "#fff",
    borderRadius: 10,
  },
});
