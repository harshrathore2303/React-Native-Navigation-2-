import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';

const Message = () => {
    // const navigation = useNavigation();
  return (
    <View style={styles.container}>
        {/* <Button title="go to calls" onPress={() => navigation.navigate('Call')}/> */}
      <Text style={styles.text}>Message</Text>
    </View>
  )
}

export default Message