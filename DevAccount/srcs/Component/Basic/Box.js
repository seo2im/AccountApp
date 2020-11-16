import React from 'react'

import * as styled from '~/srcs/Styles/Box'

function Box ({children}) {
	return (
		<styled.Box>
			{children}
		</styled.Box>
	)
}

export default Box;