import React, { useContext } from 'react'
import Horizontal from '../Component/Horizontal'

import { Context } from '../Context/Context'

import * as styled from '../Styles/Editor'

function AccountEditor ({ setEdit }) {
	const {
		account,
		modAccount
	} = useContext(Context);

	let value = account;

	return (
		<styled.EditContainer>
			<Horizontal space={false}>
				<styled.Title>액수</styled.Title>
				<styled.Input
					keyboardType='number-pad'
      				onChangeText={text => {value = Number(text)}}
      				defaultValue={String(value)}/>
			</Horizontal>
			<styled.Set onPress={()=> {
				modAccount(value);
				setEdit(false);
			}}>
				<styled.Text>수정</styled.Text>
			</styled.Set>
		</styled.EditContainer>
	)
}

export default AccountEditor;