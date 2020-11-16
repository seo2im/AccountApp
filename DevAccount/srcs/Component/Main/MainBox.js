import React from 'react'
import { TouchableOpacity } from 'react-native'

import * as styled from "~/srcs/Styles/Box"

function MainBox ({name, data, link, margin}) {
	return (
		<TouchableOpacity onPress={() => link()}
			style={{marginTop : margin}}>
			<styled.BoxTitle fontSize="15px">{name}</styled.BoxTitle>
			<styled.BoxValue>{data} 원</styled.BoxValue>
		</TouchableOpacity>
	)
}

export default MainBox