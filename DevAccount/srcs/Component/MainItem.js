import React from 'react'

import * as styled from "../Styles/Basic"

function MainItem ({name, data, link}) {
	return (
		<styled.MainItemContainer>
			<styled.MainItemText
				onPress={() => link()}>
				{name} : {data}
			</styled.MainItemText>
		</styled.MainItemContainer>
	)
}

export default MainItem