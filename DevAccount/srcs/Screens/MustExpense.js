import React, { useContext } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'

import { Context } from '../Context/Context'

import * as styled from '../Styles/Basic'

function MustExpense ({navigation}) {
	const { lists } = useContext(Context).mustExpense;

	return (
		<View style={{paddingTop : 20, paddingBottom : 20}}>
			<styled.Title style={{marginLeft : 15}}>필수 지출 목록</styled.Title>
			<FlatList
				data={lists}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				ListEmptyContent={<Text>No Item</Text>}
				renderItem={({item, index}) => (
					<styled.Box>
						<TouchableOpacity
							onPress={() => navigation.navigate('MustExpenseItem', { kind : item.name })}>
							<styled.Title>{item.name}</styled.Title>
							<styled.SubText>할당액       {item.assignTotal}</styled.SubText>
							<styled.SubText>사용액       {item.useTotal}</styled.SubText>
							<styled.SubText>잔여금       {item.balance}</styled.SubText>
						</TouchableOpacity>
					</styled.Box>
				)}
			/>
		</View>
	)
}

export default MustExpense;