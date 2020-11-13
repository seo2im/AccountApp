import React from 'react'
import Horizontal from './Horizontal'

import * as styled from '../Styles/Editor'

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