import React, { useContext, useState } from 'react'
import { Button, Modal, FlatList, TouchableOpacity } from 'react-native'
import Horizontal from '../Component/HorizontalBox'
import FixedExpenseEditor from '../Editor/FixedExpenseEditor'

import { Context } from '../Context/Context'

import * as styled from '../Styles/Basic'

function FixedExpense () {
	const { total, details } =  useContext(Context).fixedExpense;
	const [ edit, setEdit ] = useState(false);
	const [ name, setName ] = useState("");

	return (
		<styled.ViewContainer>
			<styled.Title>고정 지출</styled.Title>
			<styled.Value style={{borderBottomWidth : 2}}>{total} 원</styled.Value>
			<styled.SubText>내역</styled.SubText>
			<FlatList
				data={details}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				renderItem={({item, index}) => (
					<styled.List>
						<TouchableOpacity
						 	onPress={() => navigation.navigate("FixedExpenseEditor", {name : item.name})}>
							<Horizontal space={true}>
								<styled.ListText>{item.name}</styled.ListText>
								<styled.ListText>{item.value}원</styled.ListText>
							</Horizontal>
						</TouchableOpacity>
					</styled.List>
				)}
			/>
			<Button 
				style={{position : "absolute", bottom : 0}}
				title="추가" onPress={() => {setName("");setEdit(true);}}/>
			<Modal 
				animationType="slide"
				transparent={true}
				visible={edit}>
				<FixedExpenseEditor setEdit={setEdit} name={name}/>
			</Modal>
		</styled.ViewContainer>
	)
}

export default FixedExpense;