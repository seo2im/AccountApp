import React from 'react'

import { Horizontal } from '~/srcs/Component'
import * as styled from '~/srcs/Styles/ShowView'

function ShowTitle ({name, setVisible, value}) {

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