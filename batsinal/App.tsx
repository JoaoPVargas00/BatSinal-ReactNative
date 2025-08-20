import React, { useRef, useEffect, useState } from "react";
import { Alert, View,StyleSheet,Animated,Image,Text,TextInput,Pressable,} from "react-native";
import batsinal from "./assets/batsinal.png";

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0.3)).current;
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

  const handleLogin = () => {
    if (login === "" || senha === "") {
      Alert.alert("⚠️ Preencha todos os campos!");
    } else {
      Alert.alert(`🦇 Bem-vindo, ${login}!`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Texto fixo em cima */}
      <Text style={styles.bruce}>Acesse nosso Canal do 🦇</Text>

      {/* Logo fixa */}
      <Image source={batsinal} style={styles.batsinal} resizeMode="contain" />

      {/* Área de login com caixas de texto */}
      <View style={styles.loginBox}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Login"
          placeholderTextColor="#aaa"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Pressable style={styles.botao} onPress={handleLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </Pressable>
      </View>

      {/* Texto animado embaixo */}
      <Animated.Text style={[styles.texto, { opacity: fadeAnim }]}>
        BatSinal 🦇
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  batsinal: {
    width: 900,
    height: 500,
    justifyContent:"flex-end",
  },
  bruce: {
    color: "yellow",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  loginBox: {
    alignItems: "center",
    width: "80%",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#222",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    color: "white",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "yellow",
  },
  botao: {
    backgroundColor: "yellow",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  texto: {
    color: "yellow",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
});
