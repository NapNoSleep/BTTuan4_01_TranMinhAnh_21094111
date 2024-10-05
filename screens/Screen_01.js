import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Screen_01({ navigation }) {
  const handleSignUp = () => {
    // Điều hướng đến Screen_02 khi nhấn Sign Up
    navigation.navigate('Screen_02');
  };

  const handleLogin = () => {
    // Điều hướng đến Screen_03 khi nhấn Login
    navigation.navigate('Screen_03');
  };

  return (
    <View style={styles.container}>
      {/* Hình ảnh minh họa */}
      <Image
        source={require('../assets/DATA/Container 17.png')} // Thay thế bằng hình ảnh bạn muốn
        style={styles.image}
      />

      {/* Tiêu đề */}
      <Text style={styles.title}>Boost Productivity</Text>
      <Text style={styles.subtitle}>Simplify tasks, boost productivity</Text>

      {/* Nút Sign Up */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Nút Login */}
      <TouchableOpacity style={styles.secondaryButton} onPress={handleLogin}>
        <Text style={styles.secondaryButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Hiển thị các dấu chấm */}
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 300,
    height: 400,
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#00CFFF',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: '#00CFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#00CFFF',
  },
});
