import React, { useContext } from 'react'
import { View, Text, Button, FlatList } from 'react-native'

import { Context } from '../Context/Context'

function MustExpense ({navigation}) {
	const { lists } = useContext(Context).mustExpense;

	return (
		<View>
			<FlatList
				data={lists}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				ListEmptyContent={<Text>No Item</Text>}
				renderItem={({item, index}) => (
					<View>
						<Text onPress={() => navigation.navigate('MustExpenseItem', { item })}>{`${item.name} ${item.assignTotal} ${item.useTotal}`}</Text>
					</View>
				)}
			/>
			<Button title="ADD" onPress={() => navigation.navigate('MustExpenseEditor', { name : null })} />
		</View>
	)
}

export default MustExpense;