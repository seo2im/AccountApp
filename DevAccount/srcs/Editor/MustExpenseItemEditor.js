import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import { Context } from '../Context/Context'

function MustExpenseItemEditor ({route, navigation}) {
	const {
		mustExpense,
		addMustExpenseItem,
		modMustExpenseItem
	} = useContext(Context);

	const kind = route.params.kind;
	const item = mustExpense.lists.find(e => e.name === kind);
	const isEdit = route.params.id ? true : false;
	let id = isEdit ? route.params.id : ""
	let name = isEdit ? item.details.find(e => e.id === id).name : "";
	let value = isEdit ? item.details.find(e => e.id === id).value : 0;
	
	const time = new Date();
	let date = isEdit ? item.details.find(e => e.id === id).date : `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`;

	return (
		<View>
			<Text>{kind} : {item.assignTotal} / {item.useTotal}</Text>
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
			<Button title="setMustExpenseItem" onPress={()=> {
				isEdit ? modMustExpenseItem({kind, id, name, date, value})
						: addMustExpenseItem({kind, name, date, value});
				navigation.goBack();
			}}/>
		</View>
	)
}

export default MustExpenseItemEditor