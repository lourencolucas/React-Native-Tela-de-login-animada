import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//Animação
import * as Animatable from 'react-native-animatable';

export default function SignIn() {
 return (
   <View style={styles.container}>
     <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
       <Text style={styles.message}>Bem-vindo(a)</Text>
     </Animatable.View>
     <Animatable.View animation="fadeInUp" style={styles.containerForm}>

     </Animatable.View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{

  }
})