import React from 'react'
import Horizontal from './Horizontal'

import * as styled from '../Styles/ShowView'

function Sider ({title, value}) {
	return (
		<Horizontal space={true}>
			<styled.SubText>{title}</styled.SubText>
			<styled.SubText>{value}</styled.SubText>
		</Horizontal>
	)
}

export default Sider;