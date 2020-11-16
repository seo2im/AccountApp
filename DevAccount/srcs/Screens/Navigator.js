import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import { MainView, MustExpense, MustExpenseItem, Income, FixedExpense, Surplus } from "~/srcs/Screens"
import { Context } from '~/srcs/Context/Context'

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