import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route}: DetailsProps) => {

    const {productId} = route.params
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Details page: {productId}</Text>
      <Button
      title='Go to first screen'
      onPress={() => navigation.popToTop()}
      />
      <Button
      title='Go to Home Page'
      onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Details

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
    },
})