import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [reseted, setReseted] = useState(false);
  const [textMain, setText] = useState("É só clicar amigo!");
  const [srcImage, setSrc] = useState("");

  function reset(){
      // if(count == 17) easterEggActivated = true;
      setCount(0);
      setReseted(true);
  }

  useEffect(() => {
     var waitEasterEgg;
     if(count == 17){
         // document.title = "Quer um cookie?";
         setText("Quer um cookie?");
         waitEasterEgg = setTimeout(() => {
             setText("Ovo de pascoa!!!!")
             setSrc(require("./assets/download.jpeg"));
         }, 10000);
     }
     else if(count == 0){
         setText("É só clicar");
         try{clearTimeout(waitEasterEgg);}
         catch{}
     }
     else{
         // document.title = `Foram ${count} clicks!`;
         setText(`Foram ${count} clicks!`);
         try{clearTimeout(waitEasterEgg);}
         catch{}
     }
  }, [count]);

  useEffect(() =>{
      document.title = "Resetado";
      setTimeout(() => {document.title = "Contador de clicks";}, 3000);
  }, [reseted]);
  return (
    <View style={styles.container}>
      <Text>Welcome to the click counter!</Text>
      <Text>{textMain}</Text>
      <Button style={styles.btn} onPress={() => setCount(prevCount => prevCount + 1)} title="Click!"/>
      <br/>
      <Button onPress={() => reset()} title="reset count"/>
      <br/>
      <Image source={srcImage} style={styles.easterEgg} resizeMode="contain"/>
      <StatusBar style="auto" />
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
  easterEgg: {
      flex: 1,
      width: 500,
      height: 500
  },
  btn: {
      flex: 1,
      marginTop: 20
  }
});
