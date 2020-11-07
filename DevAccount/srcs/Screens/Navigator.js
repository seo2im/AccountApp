import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { Context } from '../Context/Context'

import MainView from "./MainView"
import MustExpense from "./MustExpense"
import MustExpenseDetail from "./MustExpenseDetail"
import Surplus from "./Surplus"

const Stack = createStackNavigator();

function ExStack ({route}) {
	const name = route.params;
	const { lists } = useContext(Context).mustExpense;
	
	return (	
		<Stack.Navigator initialRouteName={name ? "MustExpenseDetail" : "MustExpense"}>
			<Stack.Screen name="MustExpense" component={MustExpense}/>
			<Stack.Screen name="MustExpenseDetail" component={MustExpenseDetail} initialParams={{item : lists.filter(e => e.name === name)[0]}}/>
		</Stack.Navigator>
		
	)
}

function Navigator () {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Main" component={MainView} />
				<Stack.Screen name="Surplus" component={Surplus} />
				<Stack.Screen name="ExStack" component={ExStack} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigator;