import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Horizontal } from '../Styles/Horizontal'

function HorizontalBox ({children, space}) {
	return (
		<Horizontal space={space}>
			{children}
		</Horizontal>
	)
}

export default HorizontalBox