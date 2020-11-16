import React from 'react'

import * as styled from '~/srcs/Styles/Button'

function Button ({title, onPress}) {
	return (
		<styled.EditButton onPress={() => onPress()}>
			<styled.ButtonText>{title}</styled.ButtonText>
		</styled.EditButton>
	)
}

export default Button;