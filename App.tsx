import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const images = {
    'One.png': require('./assets/One.png'),
    'Two.png': require('./assets/Two.png'),
    'Three.png': require('./assets/Three.png'),
    'Four.png': require('./assets/Four.png'),
    'Five.png': require('./assets/Five.png'),
    'Six.png': require('./assets/Six.png'),
  };

  const [imageName, setImageName] = useState('One.png');

  const generateImage = () => {
    const arr = Object.keys(images); 
    setImageName(arr[Math.floor(Math.random() * arr.length)]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Roll The Dice</Text>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={images[imageName]} 
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generateImage}>
        <Text style={styles.buttonText}>Roll</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
