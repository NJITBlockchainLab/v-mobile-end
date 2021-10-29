import { useCredentialById } from '@aries-framework/react-hooks'
import type { RouteProp } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import { SafeAreaScrollView } from 'components'
import type { CredentialStackParams } from 'navigators/CredentialStack'
import React, { useEffect } from 'react'

interface Props {
  navigation: StackNavigationProp<CredentialStackParams, 'Credential Details'>
  route: RouteProp<CredentialStackParams, 'Credential Details'>
}

const CredentialDetails: React.FC<Props> = ({ navigation, route }) => {
  const credential = useCredentialById(route?.params?.credentialId)

  useEffect(() => {
    navigation.setOptions({
      // title: credential?.alias,
    })
  }, [])

  return (
    <SafeAreaScrollView>
      {/* <Text>{credential?.first_name}</Text>
      <Text>{last_name}</Text>
      <Label title="Gender" subtitle={gender} />
      <Label title="Age" subtitle={age} /> */}
    </SafeAreaScrollView>
  )
}

export default CredentialDetails