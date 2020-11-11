import React, { useContext } from 'react'
import { View, Text, FlatList, Button } from 'react-native'

import { Context } from '../Context/Context'

import * as styled from '../Styles/Basic'

function MustExpenseItem ({route, navigation}) {
	const { kind } = route.params;
	const { mustExpense } = useContext(Context);
	const { name, assignTotal, useTotal, details } = mustExpense.lists.find(e => e.name === kind)

	return (
		<styled.ViewContainer>
			<styled.Title>{name}</styled.Title>
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
					onPress={() => navigation.navigate('MustExpenseItemEditor', { kind : name, id : item.id })}>
						<styled.ListTitle>{item.name}</styled.ListTitle>
						<styled.ListText>{item.date}                  {item.value}원</styled.ListText>
					</styled.List>
				)}
			/>
		</styled.ViewContainer>
	)
}

export default MustExpenseItem