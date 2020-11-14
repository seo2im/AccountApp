import React from 'react'

import ShowTitle from './ShowTitle'
import Sider from './Sider'
import List from './List'

import * as styled from '../Styles/ShowView'

function ShowView ({title, setVisible, data, listPress}) {
	const { assignTotal, useTotal, details } = data;

	return (
		<>
			<ShowTitle name={title} setVisible={setVisible}
				value={assignTotal - (useTotal ? useTotal : 0)}/>
			{useTotal ? 
			<styled.SubBox>
				<Sider title="할당액" value={`${assignTotal} 원`} />
				<Sider title="사용액" value={`${useTotal} 원`} />
			</styled.SubBox> : null}
			<styled.SubText>내역</styled.SubText>
			<List lists={details} date
				onPress={listPress} />
			<styled.AddButton
				onPress={() => listPress( useTotal ? -1 : "")}>
				<styled.ButtonText>추가</styled.ButtonText>
			</styled.AddButton>
		</>
	)
}

export default ShowView;