import React, { useContext } from 'react'

import { Horizontal } from '~/srcs/Component'
import { Context } from '~/srcs/Context/Context'
import * as styled from '~/srcs/Styles/Editor'

function MustExpenseEditor ({setEdit, name}) {
	const {
		mustExpense,
		addMustExpense,
		modMustExpense,
		changeSurplusAssign
	} = useContext(Context);

	const isEdit = name !== "" ? true : false;
	let byCost = isEdit ? mustExpense.lists.find(e => e.name === name).byCost : 0;
	let count = isEdit ? mustExpense.lists.find(e => e.name === name).count : 0;

	return (
		<styled.EditContainer>
			<Horizontal space={false}>
				<styled.Title>이름</styled.Title>
				<styled.Input
					onChangeText={text => {name = text}}
					defaultValue={name}/>
			</Horizontal>
			<Horizontal space={false}>
				<styled.Title>회당 비용</styled.Title>
				<styled.Input
					keyboardType='number-pad'
					onChangeText={text => {byCost = Number(text)}}
					defaultValue={String(byCost)}/>
			</Horizontal>
			<Horizontal space={false}>
				<styled.Title>횟수</styled.Title>
				<styled.Input
					keyboardType='number-pad'
					onChangeText={text => {count = Number(text)}}
					defaultValue={String(count)}/>
			</Horizontal>
			<styled.Set onPress={()=> {
				isEdit ? modMustExpense({name, byCost, count}, (expense) => changeSurplusAssign("mustExpense", expense))
				: addMustExpense({name, byCost, count}, (expense) => changeSurplusAssign("mustExpense", expense));
				setEdit(false);
			}}>
				<styled.Text>추가</styled.Text>
			</styled.Set>
		</styled.EditContainer>
	)
}

export default MustExpenseEditor;