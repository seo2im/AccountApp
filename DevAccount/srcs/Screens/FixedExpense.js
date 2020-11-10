import React, { useContext } from 'react'
import { View, Text, Button, FlatList } from 'react-native'

import { Context } from '../Context/Context'

function FixedExpense ({navigation}) {
	const { total, details } =  useContext(Context).fixedExpense;

	return (
		<View>
			<Text>FixedExpense</Text>
			<Text>Total : {total}</Text>
			<Button title="Add" onPress={() => navigation.navigate("FixedExpenseEditor", {name : null})} />
			<FlatList
				data={details}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				ListEmptyContent={<Text>No Item</Text>}
				renderItem={({item, index}) => (
					<View>
						<Text onPress={() => navigation.navigate("FixedExpenseEditor", {name : item.name})}>{item.name} {item.value}</Text>
					</View>
				)}
			/>
		</View>
	)
}

export default FixedExpense;