import React, { useContext } from 'react'
import { View, Text, Button, FlatList } from 'react-native'

import { Context } from '../Context/Context'

function MainView ({navigation}) {
	const {
		account,
		income,
		fixedExpense,
		mustExpense,
		surplus,
	} = useContext(Context)

	return (
		<View>
			<Text>Account : {account}</Text>
			<Text onPress={() => navigation.navigate("IncomeStack")}>
				Income : {income.total}
			</Text>
			<Text onPress={() => navigation.navigate("FixedExpenseStack")}>
				fixedExpense : {fixedExpense.total}
			</Text>
			<Text onPress={() => navigation.navigate('SurplusStack')}>
				Surplus : {surplus.assignTotal} - {surplus.useTotal} = {surplus.assignTotal - surplus.useTotal}
			</Text>
			<Text onPress={() => navigation.navigate('MustExpenseStack')}>MustExpense</Text>
			<FlatList
				data={mustExpense.lists}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				ListEmptyContent={<Text>No Item</Text>}
				renderItem={({item, index}) => (
					<View>
						<Text onPress={() => navigation.navigate('MustExpenseStack',  item.name)}>{item.name}</Text>
						<Text>{item.assignTotal} - {item.useTotal} = {item.balance}</Text>
					</View>
				)}
			/>
		</View>
	)
}

export default MainView;

/*

			<Text onPress={() => navigation.navigate('Surplus')}>
				Surplus : {surplus.assignTotal} - {surplus.useTotal} = {surplus.assignTotal - surplus.useTotal}
			</Text>
			
*/

