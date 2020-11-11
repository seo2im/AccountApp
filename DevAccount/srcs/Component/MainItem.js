import React from 'react'
import { TouchableOpacity } from 'react-native'

import * as styled from "../Styles/Basic"

function MainItem ({name, data, link}) {
	return (
		<styled.Box>
			<TouchableOpacity onPress={() => link()}>
				<styled.BoxName>{name}</styled.BoxName>
				<styled.BoxValue>{data} 원</styled.BoxValue>
			</TouchableOpacity>
		</styled.Box>

	)
}

export default MainItem