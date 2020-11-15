import React, { useContext, useEffect } from 'react'
import Horizontal from '../Component/Horizontal'

import { Context } from '../Context/Context'

import * as styled from '../Styles/Editor'

function SurplusEditor ({setEdit, id}) {
	const {
		surplus,
		addSurplus,
		modSurplus,
		removeSurplus
	} = useContext(Context);

	const isEdit = id !== -1 ? true : false;
	let name = isEdit ? surplus.details.find(e => e.id === id).name : "";
	let value = isEdit ? surplus.details.find(e => e.id === id).value : 0;
	const time = new Date();
	let date = isEdit ? surplus.details.find(e => e.id === id).date : `${time.getYear() % 100}.${time.getMonth()}.${time.getDate()}`;

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
					modSurplus({id, name, date, value});
					setEdit(false);}}>
					<styled.Text>수정</styled.Text>
				</styled.Set>
				<styled.Set onPress={()=> {
					removeSurplus({id})
					setEdit(false);}}>
					<styled.Text>삭제</styled.Text>
				</styled.Set>
			</Horizontal> 
			:
			<styled.Set onPress={()=> {
				addSurplus({name, date, value});
				setEdit(false);
			}}>
				<styled.Text>추가</styled.Text>
			</styled.Set>
			}
		</styled.EditContainer>
	)
}

export default SurplusEditor;