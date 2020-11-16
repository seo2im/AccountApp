import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Box, Horizontal } from '~/srcs/Component'
import * as styled from '~/srcs/Styles/Box'

function TouchBox ({title, children, onPress, button, fontSize}) {

	return (
		<Box>
			<TouchableOpacity
				onPress={() => onPress()}>
				<Horizontal space={true}>
					<styled.BoxTitle fontSize={fontSize}>{title}</styled.BoxTitle>
					{button}
				</Horizontal>
					{children}
			</TouchableOpacity>
		</Box>
	)
}

export default TouchBox;