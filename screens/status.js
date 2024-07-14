import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import { useNavigation } from 'expo-router';

const Status = () => {
    // const navigation = useNavigation();
  return (
    <View style={styles.container}>
        {/* <Button title="go to messages" onPress={() => navigation.popToTop()}/> */}
      <Text style={styles.text}>Status</Text>
    </View>
  )
}

export default Status