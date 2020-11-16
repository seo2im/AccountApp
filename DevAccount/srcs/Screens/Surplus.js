import React, { useContext, useState } from 'react'

import SurplusEditor from '~/srcs/Editor/SurplusEditor'
import { ShowView, Modal } from '~/srcs/Component'

import { Context } from '~/srcs/Context/Context'
import * as styled from '~/srcs/Styles/ShowView'

function SurplusView () {
	const surplus = useContext(Context).surplus;
	const [ edit, setEdit ] = useState(false);
	const [ id, setId ] = useState(-1);

	return (
		<styled.ShowView>
			<ShowView title="여유금" 
				data={surplus}
				listPress={(id) => {setId(id);setEdit(true)}}/>
			<Modal visible={edit} setVisible={setEdit}>
				<SurplusEditor setEdit={setEdit} id={id}/>
			</Modal>
		</styled.ShowView>
	)
}

export default SurplusView;