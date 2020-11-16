import React from 'react'

import { TouchBox } from '~/srcs/Component'
import * as styled from '~/srcs/Styles/MainView'

function MainSurplus ({title, value, onPress}) {
	return (
		<TouchBox
			title={title}
			onPress={onPress}
			fontSize={"15px"}>
			<styled.BoxValue>{value}</styled.BoxValue>
		</TouchBox>
	)
}

export default MainSurplus;