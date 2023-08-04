import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import { FlashList } from "@shopify/flash-list";

import Card from "../components/Trajeta";

const DATA = [
  {
    title: "First Item tes de longitud mas largo par ver su comportamuwnto",
  },
  {
    title: "First Item tes de longitud mas largo par ver su comportamuwnto",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
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
          estimatedItemSize={100}
        />
      </View>
    </ScrollView>
  );
}

const st = StyleSheet.create({
  card: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    marginHorizontal: 2
  }
})
