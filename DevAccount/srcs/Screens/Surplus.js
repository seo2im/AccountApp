import React, { useContext, useState } from 'react'
import SurplusEditor from '../Editor/SurplusEditor'
import Editor from '../Component/Editor'
import ShowView from '../Component/ShowView'

import { Context } from '../Context/Context'
import * as styled from '../Styles/ShowView'

function SurplusView () {
	const surplus = useContext(Context).surplus;
	const [ edit, setEdit ] = useState(false);
	const [ id, setId ] = useState(-1);

	return (
		<styled.ShowView>
			<ShowView title="여유금" 
				data={surplus}
				listPress={(id) => {setId(id);setEdit(true)}}/>
			<Editor visible={edit} setVisible={setEdit}>
				<SurplusEditor setEdit={setEdit} id={id}/>
			</Editor>
		</styled.ShowView>
	)
}

export default SurplusView;