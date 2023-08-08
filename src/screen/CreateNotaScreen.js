import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../config/fb";


export default function CreateNotaScreen() {
  const [valueSend, onChangeSend] = useState({
    message: "",
    createAt: new Date(),
  });
  const navigation = useNavigation();

  // borra text input
  const cleanText = () => {
    onChangeSend({ ...valueSend, message: "" });
  };

  // text lenght
  const textLength = () => {
    return valueSend.message ? valueSend.message.length : 0;
  };

  // envio de nota
  const sendMessage = async () => {
    if (valueSend.message.trim() !== "") {
      try {
        // Aquí realizar la acción de envío
        navigation.navigate("NotasScreen");
        ToastAndroid.show("Guardado", ToastAndroid.SHORT);
        const notasRef = collection(db, "notas");
        await addDoc(notasRef, valueSend);
        cleanText();
      } catch (error) {
        console.log(error);
      }
    } else {
      ToastAndroid.show("No se puede enviar vacio", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={st.container}>
      <Text style={st.counter}>{textLength()}/240</Text>
      <View style={st.inputBlock}>
        <TextInput
          style={st.text}
          placeholder="Crear una nueva nota."
          multiline
          rows={7}
          autoCapitalize="sentences"
          maxLength={240}
          onChangeText={(text) => onChangeSend({ ...valueSend, message: text })}
          value={valueSend.message}
        />
      </View>
      <View style={st.btnContainer}>
        <TouchableOpacity onPress={cleanText}>
          <Text style={st.btn}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={st.btn} onPress={sendMessage}>
            Crear
          </Text>
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
  counter: {
    textAlign: "right",
    marginTop: 78,
  },
  inputBlock: {
    width: "100%",
    height: "auto",
    marginTop: 10,
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
