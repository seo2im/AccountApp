import React, { useContext } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'

import { Context } from '../Context/Context'

import * as styled from '../Styles/Basic'

function Income ({navigation}) {
	const { total, details } =  useContext(Context).income;

	return (
		<styled.ViewContainer>
			<styled.Title>수입</styled.Title>
			<styled.Value style={{borderBottomWidth : 2}}>{total} 원</styled.Value>
			<styled.SubText>내역</styled.SubText>
			<FlatList
				data={details}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				renderItem={({item, index}) => (
					<styled.List>
						<TouchableOpacity
						 	onPress={() => navigation.navigate("IncomeEditor", {name : item.name})}>
							<styled.ListText>{item.name}         {item.value}원</styled.ListText>
						</TouchableOpacity>
					</styled.List>
				)}
			/>
		</styled.ViewContainer>
	)
}

export default Income;