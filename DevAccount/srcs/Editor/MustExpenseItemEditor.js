import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import { Context } from '../Context/Context'
import MustExpenseItem from '../Screens/MustExpenseItem';

function MustExpenseItemEditor ({route, navigation}) {
	const {
		mustExpense,
		addMustExpenseItem,
		modMustExpenseItem
	} = useContext(Context);

	const kind = route.params.kind;
	const item = mustExpense.lists.find(e => e.name === kind);
	const isEdit = route.params.name ? true : false;
	let name = isEdit ? route.params.name : "";
	let value = isEdit ? item.details.find(e => e.name === name).value : 0;

	console.log(kind, name)
	
	const time = new Date();
	let date = isEdit ? item.details.find(e => e.name === name).date : `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`;

	return (
		<View>
			<Text>{name} : {item.assignTotal} / {item.useTotal}</Text>
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
			<Button title="setMustExpenseItem" onPress={()=> {
				isEdit ? modMustExpenseItem({kind, name, date, value})
						: addMustExpenseItem({kind, name, date, value});
				navigation.goBack();
			}}/>
		</View>
	)
}

export default MustExpenseItemEditor