import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import { useNavigation } from 'expo-router';

const Call = () => {
    // const navigation = useNavigation();
  return (
    <View style={styles.container}>
        {/* <Button title="go to status" onPress={() => navigation.navigate('Status')}/> */}
      <Text style={styles.text}>Call</Text>
    </View>
  )
}

export default Call