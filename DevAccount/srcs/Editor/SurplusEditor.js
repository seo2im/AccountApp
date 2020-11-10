import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import { Context } from '../Context/Context'

function SurplusEditor ({route, navigation}) {
	const {
		surplus,
		addSurplus,
		modSurplus
	} = useContext(Context);

	const isEdit = route.params.id ? true : false;
	const id = isEdit ? route.params.id : 0;
	let name = isEdit ? surplus.details.find(e => e.id === id).name : "";
	let value = isEdit ? surplus.details.find(e => e.id === id).value : 0;
	const time = new Date();
	let date = isEdit ? surplus.details.find(e => e.id === id).date : `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`;

	return (
		<View>
			<Text>surplus : {surplus.useTotal}</Text>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={text => {name = text}}
				defaultValue={name}
	  		/>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				keyboardType='number-pad'
      			onChangeText={text => {value = Number(text)}}
      			defaultValue={String(value)}
    		/>
			<Button title="SetSurplus" onPress={()=> {
				isEdit ? modSurplus({id, name, date, value})
				: addSurplus({name, date, value});
				navigation.goBack();
			}}/>
		</View>
	)
}

export default SurplusEditor;