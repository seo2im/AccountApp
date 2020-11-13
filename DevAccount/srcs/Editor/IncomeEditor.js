import React, { useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import Horizontal from '../Component/Horizontal'

import { Context } from '../Context/Context'
import * as styled from '../Styles/Editor'

function IncomeEditor ({setEdit, name}) {
	const {
		income,
		addIncome,
		modIncome,
		changeSurplusAssign
	} = useContext(Context);

	const isEdit = name !== "" ? true : false;
	let value = isEdit ? income.details.find(e => e.name === name).value : 0;

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
      				defaultValue={String(value)}/>
			</Horizontal>
			<styled.Set onPress={()=> {
				isEdit ? modIncome({name, value}, (income) => changeSurplusAssign("income", income))
						: addIncome({name, value}, (income) => changeSurplusAssign("income", income));
				setEdit(false);
			}}>
				<styled.Text>추가</styled.Text>
			</styled.Set>
		</styled.EditContainer>
	)
}

export default IncomeEditor;