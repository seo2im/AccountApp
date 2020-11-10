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
						<Button title={`${item.name} ${item.assignTotal} ${item.useTotal}`} onPress={() => navigation.navigate('MustExpenseDetail', { item })} />
					</View>
				)}
			/>
			
		</View>
	)
}

export default MustExpense;