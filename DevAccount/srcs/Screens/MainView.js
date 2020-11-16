import React, { useContext, useState, useEffect } from 'react'

import AccountEditor from '~/srcs/Editor/AccountEditor'
import { SurplusBox, Modal, MainBox, MustExpenseBox, Box } from '~/srcs/Component'
import { Context } from '~/srcs/Context/Context'
import * as styled from "~/srcs/Styles/MainView"
import { NextMonth } from '~/srcs/function/utils'

function MainView ({navigation}) {
	const {
		account, modAccount,
		income,
		fixedExpense,
		mustExpense, initMustExpense,
		surplus, initSurplus
	} = useContext(Context)

	const [edit, setEdit ] = useState(false);

	return (
		<styled.MainView>
			<styled.Scroll nestedScrollEnabled={false}>
				<SurplusBox title="여유금"
					value={surplus.assignTotal - surplus.useTotal}
					onPress={() => navigation.navigate("Surplus")}/>
				<MustExpenseBox
					navigation={navigation} data={mustExpense}/>				
				<styled.Title
					style={{marginTop : 15, marginBottom : 0}}>
					{"고정 값"}
				</styled.Title>
				<Box>
					<MainBox name="저금" data={account}
						link={() => setEdit(true)}
						margin={0}/>
					<MainBox name="수입" data={income.assignTotal}
						link={() => navigation.navigate("Income")}
						margin={30}/>
					<MainBox name="고정 지출" data={fixedExpense.assignTotal}
						link={() => navigation.navigate("FixedExpense")}
						margin={30}/>	
				</Box>
			</styled.Scroll>
			<Modal visible={edit} setVisible={setEdit}>
				<AccountEditor setEdit={setEdit}/>
			</Modal>
			<styled.AddButton
				onPress={() => NextMonth({account, modAccount, surplus, initSurplus, mustExpense, initMustExpense})}>
				<styled.ButtonText>이월</styled.ButtonText>
			</styled.AddButton>
		</styled.MainView>
	)
}

export default MainView;
