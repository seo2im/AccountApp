import React, { useContext, useState } from 'react'
import { FlatList, Button, Modal } from 'react-native'
import Horizontal from '../Component/HorizontalBox'
import MustExpenseItemEditor from '../Editor/MustExpenseItemEditor'

import { Context } from '../Context/Context'

import * as styled from '../Styles/Basic'

function MustExpenseItem ({route, navigation}) {
	const { kind } = route.params;
	const { mustExpense } = useContext(Context);
	const { name, assignTotal, useTotal, details } = mustExpense.lists.find(e => e.name === kind)
	const [ edit, setEdit ] = useState(false);
	const [ id, setId ] = useState(-1);

	return (
		<styled.ViewContainer>
			<styled.Title>{name}</styled.Title>
			<styled.Value>{assignTotal - useTotal} 원</styled.Value>
			<styled.SubBox>
				<Horizontal space={true}>
					<styled.SubText>할당액</styled.SubText>
					<styled.SubText>{assignTotal} 원</styled.SubText>
				</Horizontal>
				<Horizontal space={true}>
					<styled.SubText>사용액</styled.SubText>
					<styled.SubText>{useTotal} 원</styled.SubText>
				</Horizontal>
			</styled.SubBox>
			<styled.SubText>이용내역</styled.SubText>
			<FlatList
				data={details}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				renderItem={({item, index}) => (
					<styled.List
						onPress={() => {setId(item.id);setEdit(true);}}>
						<styled.ListTitle>{item.name}</styled.ListTitle>
						<Horizontal space={true}>
							<styled.ListText>{item.date}</styled.ListText>
							<styled.ListText>{item.value}원</styled.ListText>
						</Horizontal>
					</styled.List>
				)}
			/>
			<Button 
				style={{position : "absolute", bottom : 0}}
				title="추가" onPress={() => {setId(-1);setEdit(true);}}/>
			<Modal 
				animationType="slide"
				transparent={true}
				visible={edit}>
				<MustExpenseItemEditor setEdit={setEdit} kind={kind} id={id}/>
			</Modal>
		</styled.ViewContainer>
	)
}

export default MustExpenseItem