import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import { Context } from '../Context/Context'

function MustExpenseEditor ({route, navigation}) {
	const {
		mustExpense,
		addMustExpense,
		modMustExpense,
		changeSurplusAssign
	} = useContext(Context);

	const isEdit = route.params.name ? true : false;
	let name = isEdit ? route.params.name : "";
	let byCost = isEdit ? mustExpense.lists.find(e => e.name === name).byCost : 0;
	let count = isEdit ? mustExpense.lists.find(e => e.name === name).count : 0;

	return (
		<View>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={text => {name = text}}
				defaultValue={name}
	  		/>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				keyboardType='number-pad'
				onChangeText={text => {byCost = Number(text)}}
				defaultValue={String(byCost)}
    		/>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				keyboardType='number-pad'
				onChangeText={text => {count = Number(text)}}
				defaultValue={String(count)}
    		/>
			<Button title="setIncome" onPress={()=> {
				isEdit ? modMustExpense({name, byCost, count}, (expense) => changeSurplusAssign("mustExpense", expense))
						: addMustExpense({name, byCost, count}, (expense) => changeSurplusAssign("mustExpense", expense));
				navigation.goBack();
			}}/>
		</View>
	)
}

export default MustExpenseEditor;