import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import { Context } from '../Context/Context'

function SurplusEditor ({route, navigation}) {
	const {
		surplus,
		addSurplus,
		modSurplus
	} = useContext(Context);

	const isEdit = route.params.name ? true : false;
	let name = isEdit ? route.params.name : "";
	let value = isEdit ? surplus.details.find(e => e.name === name).value : 0;
	const time = new Date();
	let date = isEdit ? surplus.details.find(e => e.name === name).date : `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`;

	return (
		<View>
			<Text>surplus : {surplus.useTotal}</Text>
			{isEdit ? <Text>{name}</Text>
			: <TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={text => {name = text}}
				value={0}
	  		/>}
			<TextInput
				  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				  keyboardType='number-pad'
      			onChangeText={text => {value = Number(text)}}
      			value={0}
    		/>
			<Button title="SetSurplus" onPress={()=> {
				isEdit ? modSurplus({name, date, value})
				: addSurplus({name, date, value});
				navigation.goBack();
			}}/>
		</View>
	)
}

export default SurplusEditor;