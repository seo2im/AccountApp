import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import { Context } from '../Context/Context'

function IncomeSetter () {
	const {
		income,
		modIncome
	} = useContext(Context);

	let name = "none";
	let value = 0;

	return (
		<View>
			<Text>Income : {income.total}</Text>
			<TextInput
				  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      			onChangeText={text => {name = text}}
      			value={0}
    		/>
			<TextInput
				  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				  keyboardType='number-pad'
      			onChangeText={text => {value = Number(text)}}
      			value={0}
    		/>
			<Button title="setIncome" onPress={()=> modIncome({name, value})}/>
		</View>
	)
}

export default IncomeSetter;