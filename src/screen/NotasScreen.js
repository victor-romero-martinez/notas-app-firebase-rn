import { ScrollView, View, Text, StyleSheet } from "react-native";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../config/fb";

import Card from "../components/Trajeta";

export default function NotasScreen() {
  const [notas, setNotas] = useState([]);

  // refrescar la pantalla
  useEffect(() => {
    const notasRef = collection(db, "notas");
    const q = query(notasRef, orderBy("createAt", "desc"));

    // agrega un listener
    const unSuscribe = onSnapshot(q, (QuerySnapshot) => {
      setNotas(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          message: doc.data().message,
        }))
      );
    });
    return unSuscribe;
  }, []);

  return (
    <ScrollView style={st.container}>
      {notas.length > 0 ? (
        <View style={st.card}>
          {notas.map((item) => (
            <Card text={item.message} key={item.id} id={item.id} />
          ))}
        </View>
      ) : (
        <View style={st.loading}>
          <Text>Cargando...</Text>
        </View>
      )}
    </ScrollView>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    mergin: 5,
  },
  card: {
    height: "auto",
    width: "100%",
  },
  loading: {
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
