import React, { useContext, useState } from 'react'

import { MustExpenseItemEditor, MustExpenseEditor } from '~/srcs/Editor'
import { ShowView, Modal } from '~/srcs/Component'
import { Context } from '~/srcs/Context/Context'
import * as styled from '~/srcs/Styles/ShowView'

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
			<Modal visible={itemEdit} setVisible={setItemEdit}>
				<MustExpenseItemEditor setEdit={setItemEdit} kind={kind} id={id}/>
			</Modal>
			<Modal visible={edit} setVisible={setEdit}>
				<MustExpenseEditor setEdit={setEdit} name={kind}/>
			</Modal>
		</styled.ShowView>
	)
}

export default MustExpenseItem