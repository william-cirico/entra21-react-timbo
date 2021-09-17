import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import { Button } from './components/Button';

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

export default function App() {
  const [ selectedImage, setSelectedImage ] = useState(null);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permissão de acesso a galeria de fotos é necessária");
      return
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled) {
      return;
    }
        
    setSelectedImage({ localUri: pickerResult.uri });   
  }

  const openSharingDialogAsync = async () => {
    if (Platform.OS === "web") {
      alert("Não é possível compartilhar nesse dispositivo");
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }

  if (selectedImage) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <Button onPress={openSharingDialogAsync} text="Compartilhar a foto" />        
        <Button onPress={() => setSelectedImage(null)} text="Voltar" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo} />
      <Text style={styles.instructions}>Para compartilhar uma foto do seu celular com um amigo, apenas pressione o botão abaixo</Text>      
      
      <Button onPress={openImagePickerAsync} text="Escolha uma foto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10
  },
  instructions: {
    color: "#888",
    fontSize: 18
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});
