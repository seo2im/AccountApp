import React from 'react'

import * as styled from '../Styles/ShowView'
import Horizontal from './Horizontal'

function ShowTitle ({name, setVisible, value}) {
	console.log(setVisible)

	return (
		<>
			<Horizontal space={true}>
				<styled.Title>{name}</styled.Title>
				{setVisible?
				<styled.EditButton onPress={() => setVisible(true)}>
					<styled.ButtonText>수정</styled.ButtonText>
				</styled.EditButton> : null}
			</Horizontal>
			<styled.Value>{value} 원</styled.Value>
		</>
	)
}

export default ShowTitle;