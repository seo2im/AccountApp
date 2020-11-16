import React, { useContext } from 'react'

import { Horizontal } from '~/srcs/Component'
import { Context } from '~/srcs/Context/Context'
import * as styled from '~/srcs/Styles/Editor'

function IncomeEditor ({setEdit, name}) {
	const {
		income,
		addIncome,
		modIncome,
		removeIncome,
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
			{isEdit ?
			<Horizontal>
				<styled.Set onPress={()=> {
					modIncome({name, value}, (income) => changeSurplusAssign("income", income));
					setEdit(false);}}>
					<styled.Text>수정</styled.Text>
				</styled.Set>
				<styled.Set onPress={()=> {
					removeIncome({name, value}, (income) => changeSurplusAssign("income", income));
					setEdit(false);}}>
					<styled.Text>삭제</styled.Text>
				</styled.Set>
			</Horizontal> 
			:
			<styled.Set onPress={()=> {
				addIncome({name, value}, (income) => changeSurplusAssign("income", income));
				setEdit(false);}}>
				<styled.Text>추가</styled.Text>
			</styled.Set>
			}
		</styled.EditContainer>
	)
}

export default IncomeEditor;