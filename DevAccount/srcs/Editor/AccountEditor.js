import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import { Context } from '../Context/Context'

function AccountSetter () {
	const {
		account,
		modAccount
	} = useContext(Context);

	let changedAccount = account;

	return (
		<View>
			<Text>Account : {account}</Text>
			<TextInput
				  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				  keyboardType='number-pad'
      			onChangeText={text => {changedAccount = Number(text)}}
    		/>
			<Button title="setAccount" onPress={()=> modAccount(changedAccount)}/>
		</View>
	)
}

export default AccountSetter;