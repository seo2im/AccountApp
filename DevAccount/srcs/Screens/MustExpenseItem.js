import React from 'react'
import { View, Text, FlatList } from 'react-native'

function MustExpenseItem ({route, navigation}) {
	const { name, assignTotal, useTotal, details } = route.params.item;

	return (
		<View>
			<Text onPress={() => navigation.navigate('MustExpenseEditor', { name : name })}>{name}</Text>
			<Text>남은돈 : {assignTotal - useTotal}</Text>
			<Text>총액 : {assignTotal} 사용액 : {useTotal}</Text>
			<FlatList
				data={details}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				ListEmptyContent={<Text>No Item</Text>}
				renderItem={({item, index}) => (
					<View>
						<Text>{item.name} {item.date} {item.value}</Text>
					</View>
				)}
			/>
		</View>
	)
}

export default MustExpenseItem