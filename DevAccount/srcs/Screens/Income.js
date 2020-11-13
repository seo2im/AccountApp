import React, { useContext, useState } from 'react'

import IncomeEditor from '../Editor/IncomeEditor'
import Editor from '../Component/Editor'
import ShowView from '../Component/ShowView'

import { Context } from '../Context/Context'
import * as styled from '../Styles/ShowView'

function Income () {
	const { income } =  useContext(Context);
	const [ edit, setEdit ] = useState(false);
	const [ name, setName ] = useState("");

	return (
		<styled.ShowView>
			<ShowView title="수입"
				data={income}
				listPress={(name) => {setName(name);setEdit(true)}}/>
			<Editor visible={edit} setVisible={setEdit}>
				<IncomeEditor setEdit={setEdit} name={name}/>
			</Editor>
		</styled.ShowView>
	)
}

export default Income;