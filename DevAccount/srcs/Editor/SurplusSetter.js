import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import { Context } from '../Context/Context'

function SurplusSetter () {
	const {
		surplus,
		modSurplus
	} = useContext(Context);

	let name = "none";
	let date = "20201111";
	let value = 0;

	return (
		<View>
			<Text>surplus : {surplus.useTotal}</Text>
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
			<Button title="SetSurplus" onPress={()=> modSurplus("USE", {name, date, value})}/>
		</View>
	)
}

export default SurplusSetter;