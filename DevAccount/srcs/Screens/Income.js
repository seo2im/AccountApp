import React, { useContext, useState } from 'react'

import { IncomeEditor } from '~/srcs/Editor'
import { ShowView, Modal } from '~/srcs/Component'

import { Context } from '~/srcs/Context/Context'
import * as styled from '~/srcs/Styles/ShowView'

function Income () {
	const { income } =  useContext(Context);
	const [ edit, setEdit ] = useState(false);
	const [ name, setName ] = useState("");

	return (
		<styled.ShowView>
			<ShowView title="수입"
				data={income}
				listPress={(name) => {setName(name);setEdit(true)}}/>
			<Modal visible={edit} setVisible={setEdit}>
				<IncomeEditor setEdit={setEdit} name={name}/>
			</Modal>
		</styled.ShowView>
	)
}

export default Income;