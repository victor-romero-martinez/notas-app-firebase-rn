// import { View, Text } from 'react-native';

// import Card from '../components/Trajeta';

// export default function NotasScreen() {
  
//   return (
//     <View>
//       <Text>cmabiar a puros view</Text>
//     </View>
//   );
// };

import { Text } from "react-native";
import { FlashList } from "@shopify/flash-list";

const DATA = [
  {
    title: "First Item",
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

export default function NotasScreen()  {
  return (
    <FlashList
      numColumns= '2'
      data={DATA}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      estimatedItemSize={200}
    />
  );
};
