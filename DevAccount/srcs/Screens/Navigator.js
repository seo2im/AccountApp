import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { Context } from '../Context/Context'

import MainView from "./MainView"

import MustExpense from "./MustExpense"
import MustExpenseItem from "./MustExpenseItem"
import MustExpenseEditor from "../Editor/MustExpenseEditor"
import MustExpenseItemEditor from '../Editor/MustExpenseItemEditor'

import Income from "./Income"
import IncomeEditor from "../Editor/IncomeEditor"

import FixedExpense from "./FixedExpense"
import FixedExpenseEditor from "../Editor/FixedExpenseEditor"

import Surplus from "./Surplus"
import SurplusEditor from "../Editor/SurplusEditor"

const Stack = createStackNavigator();

function IncomeStack () {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Income" component={Income} />
			<Stack.Screen name="IncomeEditor" component={IncomeEditor} />
		</Stack.Navigator>
	)
}

function FixedExpenseStack () {
	return (
		<Stack.Navigator>
			<Stack.Screen name="FixedExpense" component={FixedExpense} />
			<Stack.Screen name="FixedExpenseEditor" component={FixedExpenseEditor} />
		</Stack.Navigator>
	)
}

function SurplusStack () {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Surplus" component={Surplus} />
			<Stack.Screen name="SurplusEditor" component={SurplusEditor} />
		</Stack.Navigator>
	)
}

function MustExpenseStack ({route}) {
	const name = route.params;
	const { lists } = useContext(Context).mustExpense;
	
	return (	
		<Stack.Navigator initialRouteName={name ? "MustExpenseItem" : "MustExpense"}>
			<Stack.Screen name="MustExpense" component={MustExpense}/>
			<Stack.Screen name="MustExpenseItem" component={MustExpenseItem} initialParams={{item : lists.filter(e => e.name === name)[0]}}/>
			<Stack.Screen name="MustExpenseEditor" component={MustExpenseEditor} />
			<Stack.Screen name="MustExpenseItemEditor" component={MustExpenseItemEditor} />
		</Stack.Navigator>
		
	)
}

function Navigator () {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Main" component={MainView} />
				<Stack.Screen name="IncomeStack" component={IncomeStack} />
				<Stack.Screen name="FixedExpenseStack" component={FixedExpenseStack} />
				<Stack.Screen name="SurplusStack" component={SurplusStack} />
				<Stack.Screen name="MustExpenseStack" component={MustExpenseStack} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigator;