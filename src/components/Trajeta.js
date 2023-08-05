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
    backgroundColor: "#00ebc7",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  delete: {
    width: 60,
    marginTop: -20,
    marginLeft: 14,
    textAlign: "center",
    backgroundColor: "#232323",
    color: "#fff",
    borderRadius: 10,
  },
});
