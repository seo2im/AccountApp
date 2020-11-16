import React, { useContext } from 'react'

import { Horizontal } from '~/srcs/Component'
import { Context } from '~/srcs/Context/Context'
import * as styled from '~/srcs/Styles/Editor'

function FixedExpenseEditor ({ setEdit, name}) {
	const {
		fixedExpense,
		addFixedExpense,
		modFixedExpense,
		removeFixedExpense,
		changeSurplusAssign
	} = useContext(Context);

	const isEdit = name !== "" ? true : false;
	let value = isEdit ? fixedExpense.details.find(e => e.name === name).value : 0;

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
					modFixedExpense({name, value}, (expense) => changeSurplusAssign("fixedExpense", expense))
					setEdit(false);}}>
					<styled.Text>수정</styled.Text>
				</styled.Set>
				<styled.Set onPress={()=> {
					removeFixedExpense({name, value}, (expense) => changeSurplusAssign("fixedExpense", expense))
					setEdit(false);}}>
					<styled.Text>삭제</styled.Text>
				</styled.Set>
			</Horizontal>
			:
			<styled.Set onPress={()=> {
				addFixedExpense({name, value}, (expense) => changeSurplusAssign("fixedExpense", expense));
				setEdit(false);}}>
				<styled.Text>추가</styled.Text>
			</styled.Set>
			}
		</styled.EditContainer>
	)
}

export default FixedExpenseEditor;