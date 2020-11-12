import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import Horizontal from '../Component/HorizontalBox'

import { Context } from '../Context/Context'

import * as styled from '../Styles/Editor'

function MustExpenseItemEditor ({setEdit, kind, id}) {
	const {
		mustExpense,
		addMustExpenseItem,
		modMustExpenseItem
	} = useContext(Context);

	const item = mustExpense.lists.find(e => e.name === kind);
	const isEdit = id !== -1 ? true : false;
	let name = isEdit ? item.details.find(e => e.id === id).name : "";
	let value = isEdit ? item.details.find(e => e.id === id).value : 0;
	const time = new Date();
	let date = isEdit ? item.details.find(e => e.id === id).date : `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`;

	return (
		<styled.EditContainer>
			<Horizontal space={false}>
				<styled.Title>내용</styled.Title>
				<styled.Input
					onChangeText={text => {name = text}}
					defaultValue={name}/>
			</Horizontal>
			<Horizontal space={false}>
				<styled.Title>액수</styled.Title>
				<styled.Input
					keyboardType='number-pad'
					onChangeText={text => {value = Number(text)}}
					defaultValue={String(value)}
    			/>
			</Horizontal>
			<styled.Set onPress={()=> {
				isEdit ? modMustExpenseItem({kind, id, name, date, value})
				: addMustExpenseItem({kind, name, date, value});
				setEdit(false);
			}}>
				<styled.Text>추가</styled.Text>
			</styled.Set>
		</styled.EditContainer>
	)
}

export default MustExpenseItemEditor