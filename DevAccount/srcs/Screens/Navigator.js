import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { Context } from '../Context/Context'

import MainView from "./MainView"

import MustExpense from "./MustExpense"
import MustExpenseItem from "./MustExpenseItem"
import Income from "./Income"
import FixedExpense from "./FixedExpense"
import Surplus from "./Surplus"

const Stack = createStackNavigator();

function MustExpenseStack ({route}) {
	const kind = route.params;
	const { lists } = useContext(Context).mustExpense;
	
	return (	
		<Stack.Navigator 
			headerMode="none"
			initialRouteName={kind ? "MustExpenseItem" : "MustExpense"}>
			<Stack.Screen name="MustExpense" component={MustExpense}/>
			<Stack.Screen name="MustExpenseItem" component={MustExpenseItem} initialParams={{ kind }}/>
		</Stack.Navigator>
		
	)
}

function Navigator () {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="Main" component={MainView} />
				<Stack.Screen name="Surplus" component={Surplus} />
				<Stack.Screen name="Income" component={Income} />
				<Stack.Screen name="FixedExpense" component={FixedExpense} />
				<Stack.Screen name="MustExpenseStack" component={MustExpenseStack} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigator;