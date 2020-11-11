import React, { useContext, useState } from 'react'
import { Modal, Button, Text } from 'react-native'

import { Context } from '../Context/Context'

import MainItem from '../Component/MainItem'
import MainList from '../Component/MainList'
import MainBox from '../Component/MainBox'

import * as styled from "../Styles/Basic"

function MainView ({navigation}) {
	const {
		account,
		income,
		fixedExpense,
		mustExpense,
		surplus,
	} = useContext(Context)

	const [visible, setVisible ]= useState(false);

	return (
		<>
			<MainItem name="여유금" data={surplus.assignTotal - surplus.useTotal}
				link={() => navigation.navigate("Surplus")}/>
			<styled.BoxTitle
				onPress={() => navigation.navigate("MustExpenseStack")}>
				{"필수 지출"}
			</styled.BoxTitle>
			<MainList name="필수 지출" data={mustExpense}
				navigation={navigation} linkName="MustExpenseStack"/>
			<styled.BoxTitle>
				{"고정 값"}
			</styled.BoxTitle>
			<styled.Box style={{marginTop : 3}}>
				<MainBox name="저금" data={account}
					link={() => {}}
					margin={0}/>
				<MainBox name="수입" data={income.total}
					link={() => navigation.navigate("Income")}
					margin={30}/>
				<MainBox name="고정 지출" data={fixedExpense.total}
					link={() => navigation.navigate("FixedExpense")}
					margin={30}/>
			</styled.Box>
		</>
	)
}

export default MainView;
