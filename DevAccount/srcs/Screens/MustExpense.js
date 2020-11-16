import React, { useContext, useState } from 'react'
import { FlatList } from 'react-native'

import { MustExpenseEditor } from '~/srcs/Editor'
import { TouchBox, Button, Modal, Sider } from '~/srcs/Component'
import { Context } from '~/srcs/Context/Context'
import * as styled from '~/srcs/Styles/MainView'

function MustExpense ({navigation}) {
	const { mustExpense, 
		removeMustExpense, 
		changeSurplusAssign 
	} = useContext(Context);
	const { lists } = mustExpense;
	const [ edit, setEdit ] = useState(false);
	const [ name, setName ] = useState("");

	return (
		<styled.MainView>
			<styled.Title>필수 지출 목록</styled.Title>
			<FlatList
				data={lists}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				renderItem={({item, index}) => (
					<TouchBox title={item.name} fontSize="25px"
						onPress={() => navigation.navigate("MustExpenseItem", {kind : item.name})}
						button={<Button title="삭제" onPress={() => removeMustExpense({ name : item.name }, (expense) => changeSurplusAssign("mustExpense", expense))}/>}>
						<Sider title="할당액" value={item.assignTotal}/>
						<Sider title="사용액" value={item.useTotal}/>
						<Sider title="잔여금" value={item.balance}/>
					</TouchBox>
					
				)}
			/>
			<styled.AddButton onPress={() => {setName("");setEdit(true);}}>
				<styled.ButtonText>추가</styled.ButtonText>
			</styled.AddButton>
			<Modal visible={edit} setVisible={setEdit}>
				<MustExpenseEditor setEdit={setEdit} name={name}/>
			</Modal>
		</styled.MainView>
	)
}

export default MustExpense;