import { ScrollView, StyleSheet, View, Dimensions, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";

import Card from "../components/Trajeta";

const DATA = [
  {
    title: "First Item tes de longitud mas largo par ver su comportamuwnto",
    id: 1,
  },
  {
    title: "First Item tes de longitud mas largo par ver su comportamuwnto",
    id: 2,
  },
  {
    title: "Second Item",
    id: 3,
  },
  {
    title: "First Item",
    id: 4,
  },
  {
    title: "Second Item",
    id: 5,
  },
];

export default function NotasScreen() {
  return (
    <ScrollView>
      <View style={st.card}>
        <FlashList
          numColumns="2"
          data={DATA}
          renderItem={({ item }) => <Card title={item.title} />}
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
