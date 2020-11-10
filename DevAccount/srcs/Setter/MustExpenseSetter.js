import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import { Context } from '../Context/Context'

function ChangeMustExpense () {
	const {
		mustExpense,
		modMustExpense
	} = useContext(Context);

	let kind = "Coffee";
	let name = "none";
	let byCost = 0;
	let count = 0;

	return (
		<View>
			<Text>MustExpense : {mustExpense.assignTotal}</Text>
			<TextInput
				  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      			onChangeText={text => {name = text}}
      			value={0}
    		/>
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
			<Button title="changeMustExpense" onPress={()=> modMustExpense("CHANGE", {kind, byCost, count})}/>
		</View>
	)
}

function UseMustExpense () {
	const {
		mustExpense,
		modMustExpense
	} = useContext(Context);

	let kind = "Coffee";
	let name = "none";
	let date = "20201010"
	let value = 0;

	return (
		<View>
			<Text>MustExpense : {mustExpense.useTotal}</Text>
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
			<Button title="useExpense" onPress={()=> modMustExpense("USE", {kind, name, date, value})}/>
		</View>
	)
}

export { ChangeMustExpense, UseMustExpense };