import styled from 'styled-components/native'
import * as Basic from './Basic_'
import Fonts from './Fonts'

export const EditButton = styled(Basic.Click)`
	width : 80px;
	height : 35px;
	
	background-color : white;
	elevation : 20;
	border-radius : 15px;
	margin-left : 20px;
`

export const ButtonText = styled(Basic.SmallText)`
	font-size : 25px;
	margin : auto;
`