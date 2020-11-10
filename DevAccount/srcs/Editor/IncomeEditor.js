import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import { Context } from '../Context/Context'

function IncomeEditor ({route}) {
	const {
		income,
		addIncome,
		modIncome,
		changeSurplusAssign
	} = useContext(Context);

	const isEdit = route.params.name ? true : false;
	let name = isEdit ? route.params.name : "";
	let value = isEdit ? income.details.find(e => e.name === name).value : 0;

	console.log(name);

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
      			value={value}
    		/>
			<Button title="setIncome" onPress={()=> {
				isEdit ? modIncome({name, value}, () => changeSurplusAssign(50000))
						: addIncome({name, value}, () => changeSurplusAssign(50000));
			}}/>
		</View>
	)
}

export default IncomeEditor;