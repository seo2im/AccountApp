import styled from 'styled-components/native'
import * as Basic from './Basic_'
import Fonts from './Fonts'

export const MainView = styled.View`
	margin : 20px 0;
	flex : 1;
`

export const Title = styled(Basic.BigText)`
	margin-left : 25px;
	margin-bottom : 15px;
`
export const Box = styled(Basic.Box)`
`;

export const BoxTitle = styled(Basic.BigText)`
	margin-bottom : 10px;
`

export const AddButton = styled(Basic.Click)`
	border-radius : 15px;
	width : 80px;
	height : 40px;
	
	position : absolute;
	right : 20px;
	bottom : 0;

	background-color : white;
	elevation : 20;
	
`

export const ButtonText = styled(Basic.SmallText)`
	margin : auto;
`
