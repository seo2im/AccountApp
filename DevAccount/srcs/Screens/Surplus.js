import React, { useContext, useState } from 'react'
import { View, Text, FlatList, Button, Modal } from 'react-native'

import { Context } from '../Context/Context'
import SurplusEditor from '../Editor/SurplusEditor'

import * as styled from '../Styles/Basic'

function SurplusView ({navigation}) {
	const { assignTotal, useTotal, details } = useContext(Context).surplus;
	const [ edit, setEdit ] = useState(false);

	return (
		<styled.ViewContainer>
			<styled.Title>여유금</styled.Title>
			<styled.Value>{assignTotal - useTotal} 원</styled.Value>
			<styled.SubBox>
				<styled.SubText>할당액          {assignTotal} 원</styled.SubText>
				<styled.SubText>사용액          {useTotal} 원</styled.SubText>
			</styled.SubBox>
			<styled.SubText>이용내역</styled.SubText>
			<FlatList
				data={details}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				renderItem={({item, index}) => (
					<styled.List
						onPress={() => navigation.navigate("SurplusEditor", {id : item.id})}>
						<styled.ListTitle>{item.name}</styled.ListTitle>
						<styled.ListText>{item.date}                  {item.value}원</styled.ListText>
					</styled.List>
				)}
			/>
			<Button title="test" onPress={() => setEdit(!edit)}/>
			<Modal
				visible={edit}>
				<SurplusEditor />
			</Modal>
		</styled.ViewContainer>
	)
}

export default SurplusView;