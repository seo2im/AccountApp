import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import { Context } from '../Context/Context'

function FixedExpenseEditor ({route, navigation}) {
	const {
		fixedExpense,
		addFixedExpense,
		modFixedExpense,
		changeSurplusAssign
	} = useContext(Context);

	const isEdit = route.params.name ? true : false;
	let name = isEdit ? route.params.name : "";
	let value = isEdit ? fixedExpense.details.find(e => e.name === name).value : 0;

	return (
		<View>
			<Text>fixedExpense : {fixedExpense.total}</Text>
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
			<Button title="setfixedExpense" onPress={()=> {
				isEdit ? modFixedExpense({name, value}, () => changeSurplusAssign(50000))
				: addFixedExpense({name, value}, () => changeSurplusAssign(50000));
				navigation.goBack();
			}}/>
		</View>
	)
}

export default FixedExpenseEditor;