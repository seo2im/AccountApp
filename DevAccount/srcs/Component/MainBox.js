import React from 'react'
import { TouchableOpacity } from 'react-native'

import * as styled from "../Styles/Basic"

function MainBox ({name, data, link, margin}) {
	return (
		<TouchableOpacity onPress={() => link()}
			style={{marginTop : margin}}>
			<styled.BoxName>{name}</styled.BoxName>
			<styled.BoxValue>{data} 원</styled.BoxValue>
		</TouchableOpacity>
	)
}

export default MainBox