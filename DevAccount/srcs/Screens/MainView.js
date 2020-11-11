import React, { useContext } from 'react'
import { View, Text, Button, FlatList } from 'react-native'

import { Context } from '../Context/Context'

import MainItem from '../Component/MainItem'
import MainList from '../Component/MainList'

import * as styled from "../Styles/Basic"

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
			<MainItem name="Account" data={account}
				link={() => {}}/>
			<MainItem name="Income" data={income.total}
				link={() => navigation.navigate("IncomeStack")}/>
			<MainItem name="Fixed Expense" data={fixedExpense.total}
				link={() => navigation.navigate("FixedExpenseStack")}/>
			<MainItem name="Surplus" data={`${surplus.assignTotal} - ${surplus.useTotal} = ${surplus.assignTotal - surplus.useTotal}`}
				link={() => navigation.navigate("SurplusStack")}/>
			<MainList name="Must Expense" data={mustExpense}
				navigation={navigation} linkName="MustExpenseStack"/>
		</View>
	)
}

export default MainView;

/*

			<Text onPress={() => navigation.navigate('Surplus')}>
				Surplus : {surplus.assignTotal} - {surplus.useTotal} = {surplus.assignTotal - surplus.useTotal}
			</Text>
			
*/

