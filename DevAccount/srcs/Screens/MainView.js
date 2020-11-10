import React, { useContext } from 'react'
import { View, Text, Button, FlatList } from 'react-native'

import { Context } from '../Context/Context'

import * as styled from '../Styles/Basic'

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
			<styled.Content>Account : {account}</styled.Content>
			<styled.Content onPress={() => navigation.navigate("IncomeStack")}>
				Income : {income.total}
			</styled.Content>
			<styled.Content onPress={() => navigation.navigate("FixedExpenseStack")}>
				fixedExpense : {fixedExpense.total}
			</styled.Content>
			<styled.Content onPress={() => navigation.navigate('SurplusStack')}>
				Surplus : {surplus.assignTotal} - {surplus.useTotal} = {surplus.assignTotal - surplus.useTotal}
			</styled.Content>
			<styled.Content onPress={() => navigation.navigate('MustExpenseStack')}>MustExpense</styled.Content>
			<FlatList
				data={mustExpense.lists}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				ListEmptyContent={<Text>No Item</Text>}
				renderItem={({item, index}) => (
					<styled.List>
						<Text onPress={() => navigation.navigate('MustExpenseStack',  item.name)}>{item.name}</Text>
						<Text>{item.assignTotal} - {item.useTotal} = {item.balance}</Text>
					</styled.List>
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

