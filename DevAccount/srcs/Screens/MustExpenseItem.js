import React, { useContext, useState } from 'react'

import MustExpenseItemEditor from '../Editor/MustExpenseItemEditor'
import MustExpenseEditor from '../Editor/MustExpenseEditor'
import Editor from '../Component/Editor'
import ShowView from '../Component/ShowView'

import { Context } from '../Context/Context'
import * as styled from '../Styles/ShowView'

function MustExpenseItem ({route}) {
	const { kind } = route.params;
	const item = useContext(Context).mustExpense.lists.find(e => e.name === kind);
	const [ itemEdit, setItemEdit ] = useState(false);
	const [ edit, setEdit] = useState(false);
	const [ id, setId ] = useState(-1);

	return (
		<styled.ShowView>
			<ShowView title={item.name}
				setVisible={setEdit}
				data={item}
				listPress={(id) => {setId(id);setItemEdit(true)}}/>
			<Editor visible={itemEdit} setVisible={setItemEdit}>
				<MustExpenseItemEditor setEdit={setItemEdit} kind={kind} id={id}/>
			</Editor>
			<Editor visible={edit} setVisible={setEdit}>
				<MustExpenseEditor setEdit={setEdit} name={kind}/>
			</Editor>
		</styled.ShowView>
	)
}

export default MustExpenseItem