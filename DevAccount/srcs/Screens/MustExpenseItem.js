import React, { useContext } from 'react'
import { View, Text, FlatList, Button } from 'react-native'

import { Context } from '../Context/Context'

function MustExpenseItem ({route, navigation}) {
	const { kind } = route.params;
	const { mustExpense } = useContext(Context);
	const { name, assignTotal, useTotal, details } = mustExpense.lists.find(e => e.name === kind)

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
						<Text onPress={() => navigation.navigate('MustExpenseItemEditor', { kind : name, id : item.id })}>{item.name} {item.date} {item.value}</Text>
					</View>
				)}
			/>
			<Button title="ADD" onPress={() => navigation.navigate('MustExpenseItemEditor', { kind : name, id : null })} />
		</View>
	)
}

export default MustExpenseItem