import React, { useContext, useState, useEffect } from 'react'
import { Button } from 'react-native'

import { Context } from '../Context/Context'
import { NextMonth } from '../function/utils'

import MainItem from '../Component/MainItem'
import MainList from '../Component/MainList'
import MainBox from '../Component/MainBox'
import Editor from '../Component/Editor'
import AccountEditor from '../Editor/AccountEditor'

import * as styled from "../Styles/MainView"

function MainView ({navigation}) {
	const {
		account, modAccount,
		income,
		fixedExpense,
		mustExpense, initMustExpense,
		surplus, initSurplus
	} = useContext(Context)

	const [edit, setEdit ] = useState(false);

	//

	return (
		<styled.MainView>
			<MainItem name="여유금" data={surplus.assignTotal - surplus.useTotal}
				link={() => navigation.navigate("Surplus")}/>
			<styled.Title
				style={{marginTop : 15, marginBottom : 0}}
				onPress={() => navigation.navigate("MustExpenseStack")}>
				{"필수 지출"}
			</styled.Title>
			<MainList name="필수 지출" data={mustExpense}
				navigation={navigation} linkName="MustExpenseStack"/>
			<styled.Title
				style={{marginTop : 15, marginBottom : 0}}>
				{"고정 값"}
			</styled.Title>
			<styled.Box style={{marginTop : 3}}>
				<MainBox name="저금" data={account}
					link={() => setEdit(true)}
					margin={0}/>
				<MainBox name="수입" data={income.assignTotal}
					link={() => navigation.navigate("Income")}
					margin={30}/>
				<MainBox name="고정 지출" data={fixedExpense.assignTotal}
					link={() => navigation.navigate("FixedExpense")}
					margin={30}/>
				<Editor visible={edit} setVisible={setEdit}>
					<AccountEditor setEdit={setEdit}/>
				</Editor>
				<styled.AddButton
					onPress={() => NextMonth({account, modAccount, surplus, initSurplus, mustExpense, initMustExpense})}>
					<styled.ButtonText>이월</styled.ButtonText>
				</styled.AddButton>
			</styled.Box>

		</styled.MainView>
	)
}

export default MainView;
