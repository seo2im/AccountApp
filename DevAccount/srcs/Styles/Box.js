import styled from 'styled-components/native'
import * as Basic from './Basic_'
import Fonts from './Fonts'

export const Box = styled(Basic.Box)`
`;


export const BoxTitle = styled(Basic.BigText)`
	font-size : ${(props => props.fontSize !== undefined ? props.fontSize : "20px")};
	margin-bottom : 20px;
`

export const BoxValue = styled.Text`
	font-family : ${Fonts.GongGothicB};
	font-size : 25px;
`