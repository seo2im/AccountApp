import React from 'react'

import { Horizontal } from '~/srcs/Component'
import * as styled from '~/srcs/Styles/Editor'

function Input ({title, value}) {
	return (
		<Horizontal space={true}>
			<styled.Title>{title}</styled.Title>
			<styled.Input
				onChangeText={text => {value = text}}
				defaultValue={value}/>
		</Horizontal>
	)
}

export default Input;