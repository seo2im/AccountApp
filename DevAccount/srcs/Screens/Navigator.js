import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import MainView from "./MainView"
import MustExpense from "./MustExpense"

const Stack = createStackNavigator();

function Navigator () {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Main" component={MainView} />
				<Stack.Screen name="MustExpense" component={MustExpense} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigator;