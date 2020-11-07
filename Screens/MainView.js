import React, { useContext } from 'react'
import { View, Text, FlatList, Button } from 'react-native'

import { Context } from '~/Context'

function MainView () {
	const {
		account,
		income,
		fixedExpense,
		mustExpense,
		surplus
	} = useContext(Context)

	return (
		<View>
			<Text>Main View</Text>
			<Button onPress={this.props.navigation.navigate('Surplus')}>Move</Button>
		</View>
	)
}

export default MainView;

/*

		<View>
			<Text>Account : {account}</Text>
			<Text>Surplus : {surplus.assignTotal} - {surplus.useTotal} = {surplus.assignTotal - surplus.useTotal}</Text>
			<Text>Must Expense</Text>
			<FlatList
				data={mustExpense.lists}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				ListEmptyContent={<Text>No Item</Text>}
				renderItem={({item, index}) => (
					<View>
						<Text>{item.name}</Text>
						<Text>{item.assignTotal} - {item.useTotal} = {item.balance}</Text>
					</View>
				)}
			/>
		</View>

*/