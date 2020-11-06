import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import MainView from './MainView'
import MustExpenseView from './MustExpenseView'
import MustExpenseDetail from './MustExpenseDetail'
import SurplusView from './SurplusView'

const MustExpense = createStackNavigator({
	Main : MustExpenseView,
	Detail : MustExpenseDetail
},
{
	initialRouteName : 'Main',
	headerMode : none
})

const Navigator = createStackNavigator({
	Main : MainView,
	MustExpense : MustExpense,
	Surplus : SurplusView
},
{
	initialRouteName : 'Main',
	headerMode : none
})

export default createAppContainer(Navigator);
