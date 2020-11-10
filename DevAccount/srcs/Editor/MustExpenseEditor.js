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
			{isEdit ? <Text>{name}</Text>
			: <TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={text => {name = text}}
				value={0}
	  		/>}
			<TextInput
				  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				  keyboardType='number-pad'
      			onChangeText={text => {byCost = Number(text)}}
      			value={0}
    		/>
			<TextInput
				  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				  keyboardType='number-pad'
      			onChangeText={text => {count = Number(text)}}
      			value={0}
    		/>
			<Button title="setIncome" onPress={()=> {
				isEdit ? modMustExpense({name, byCost, count}, () => changeSurplusAssign(50000))
						: addMustExpense({name, byCost, count}, () => changeSurplusAssign(50000));
				navigation.goBack();
			}}/>
		</View>
	)
}

export default MustExpenseEditor;