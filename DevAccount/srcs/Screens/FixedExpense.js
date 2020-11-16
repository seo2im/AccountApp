import React, { useContext, useState } from 'react'

import FixedExpenseEditor from '~/srcs/Editor/FixedExpenseEditor'
import { ShowView, Modal } from '~/srcs/Component'
import { Context } from '../Context/Context'
import * as styled from '../Styles/ShowView'

function FixedExpense () {
	const { fixedExpense } =  useContext(Context);
	const [ edit, setEdit ] = useState(false);
	const [ name, setName ] = useState("");

	return (
		<styled.ShowView>
			<ShowView title="고정 지출"
				data={fixedExpense}
				listPress={(name) => {setName(name);setEdit(true)}}/>
			<Modal visible={edit} setVisible={setEdit}>
				<FixedExpenseEditor setEdit={setEdit} name={name}/>
			</Modal>
		</styled.ShowView>
	)
}

export default FixedExpense;