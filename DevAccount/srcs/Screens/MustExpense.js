import React, { useContext, useState } from 'react'
import { Modal, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'

import MustExpenseEditor from '../Editor/MustExpenseEditor'
import Editor from '../Component/Editor'
import Sider from '../Component/Sider'

import { Context } from '../Context/Context'
import * as styled from '../Styles/MainView'

function MustExpense ({navigation}) {
	const { lists } = useContext(Context).mustExpense;
	const [ edit, setEdit ] = useState(false);
	const [ name, setName ] = useState("");

	return (
		<styled.MainView>
			<styled.Title>필수 지출 목록</styled.Title>
			<FlatList
				data={lists}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				renderItem={({item, index}) => (
					<styled.Box>
						<TouchableOpacity
							onPress={() => navigation.navigate("MustExpenseItem", {kind : item.name})}>
							<styled.BoxTitle>{item.name}</styled.BoxTitle>
							<Sider title="할당액" value={item.assignTotal}/>
							<Sider title="사용액" value={item.useTotal}/>
							<Sider title="잔여금" value={item.balance}/>
						</TouchableOpacity>
					</styled.Box>
				)}
			/>
			<styled.AddButton onPress={() => {setName("");setEdit(true);}}>
				<styled.ButtonText>추가</styled.ButtonText>
			</styled.AddButton>
			<Editor visible={edit} setVisible={setEdit}>
				<MustExpenseEditor setEdit={setEdit} name={name}/>
			</Editor>
		</styled.MainView>
	)
}

export default MustExpense;