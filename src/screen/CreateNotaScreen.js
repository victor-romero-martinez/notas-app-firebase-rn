import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function CreateNotaScreen() {
  const [value, onChangeText] = useState("");

  // borra text input
  const clearTeaxt = () => {
    onChangeText('');
  };

  return (
    <View style={st.container}>
      <View style={st.inputBlock}>
        <TextInput
          style={st.text}
          placeholder="Crear una nueva nota."
          multiline
          autoCapitalize="sentences"
          numberOfLines={6}
          maxLength={180}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
      <View style={st.btnContainer}>
        <TouchableOpacity  onPress={clearTeaxt}>
          <Text style={[st.btn]}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[st.btn]}>Crear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    margin: 14,
    backgroundColor: "#fff",
  },
  inputBlock: {
    width: "100%",
    height: "auto",
    marginTop: 80,
    borderColor: "#2a2a40",
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 28,
  },
  btn: {
    width: 120,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#232323",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
  },
});
