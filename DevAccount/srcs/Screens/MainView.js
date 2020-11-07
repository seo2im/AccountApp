import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'


import { Context } from '../Context/Context'
function MainView ({navigation}) {
	const {
		account,
		income,
		fixedExpense,
		mustExpense,
		surplus
	} = useContext(Context)

	console.log(account)

	return (
		<View>
			<Text>Main View</Text>
			<Button title="nav" onPress={() => navigation.navigate('MustExpense')} />
		</View>
	)
}

export default MainView;