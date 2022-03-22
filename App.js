import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';

export default function App() {

  // const [titleText, setTitleText] = useState("Bird's Nest");
  // const bodyText = "This is not really a bird nest.";

  // const onPressTitle = () => {
  //   setTitleText("Bird's Nest [pressed]");
  // };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/mountain.jpeg')} resizeMode="cover" style={styles.image} >

        <View style={styles.textContainer}>
          <Text style={styles.titletext}>Welcome to Conner's App</Text>
        </View>

        <View style={styles.buttonContainer}>
            <Button
              title="Login"
              color="black"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  buttonContainer: {
    backgroundColor: '#fff',
    width: 150,
    height: 50,
    justifyContent: 'center',
    bottom: 80,
    borderRadius: 30,
  },
  textContainer: {
    top: 70,
  },
  titletext: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900',
  },
});
