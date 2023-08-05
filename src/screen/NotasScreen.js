import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { FlashList } from "@shopify/flash-list";
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
    <ScrollView>
      <View style={st.card}>
        <FlashList
          numColumns="2"
          data={notas}
          renderItem={({ item }) => <Card text={item.message} id={item.id} />}
          keyExtractor={(item) => item.id}
          estimatedItemSize={100}
        />
      </View>
    </ScrollView>
  );
}

const st = StyleSheet.create({
  card: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    marginHorizontal: 2,
  },
});
