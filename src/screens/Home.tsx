import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Home Page</Text>
      <Button
      title="Go to detail page"
      onPress={() => navigation.navigate("Details", {productId: "86"})}
      />
    </View>
  )
}

const styles = StyleSheet.create({

    text: {
        fontSize: 27,
        fontWeight: '700',
        color: '#111111'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default Home