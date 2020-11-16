import React from 'react'
import * as styled from '~/srcs/Styles/Basic_'

function Horizontal ({children, space}) {
	return (
		<styled.Horizontal space={space}>
			{children}
		</styled.Horizontal>
	)
}

export default Horizontal