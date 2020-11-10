import React, { useContext } from 'react'
import { View, Text, Button, FlatList } from 'react-native'

import { Context } from '../Context/Context'

function Income ({navigation}) {
	const { total, details } =  useContext(Context).income;

	return (
		<View>
			<Text>Income</Text>
			<Text>Total : {total}</Text>
			<FlatList
				data={details}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				ListEmptyContent={<Text>No Item</Text>}
				renderItem={({item, index}) => (
					<View>
						<Text>{item.name} {item.value}</Text>
					</View>
				)}
			/>
		</View>
	)
}

export default Income;