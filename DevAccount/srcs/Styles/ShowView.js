import styled from 'styled-components/native'
import * as Basic from './Basic_'
import Fonts from './Fonts'

export const ShowView = styled.View`
	flex : 1;
	margin : 20px;
`

export const Title = styled(Basic.MediumText)`
	margin-bottom : 10px;
`

export const Value = styled(Basic.BigText)`
	margin-bottom : 20px;
`

export const SubBox = styled.View`
	border-top-width : 2.5px;
	border-bottom-width : 2.5px;
	padding-top : 30px;
	margin-bottom : 20px;
`
export const SubText = styled(Basic.SmallText)`
	margin-bottom : 30px;
`

export const ListClick = styled(Basic.Click)`
	margin-bottom : 20px;
`

export const ListTitle = styled(Basic.SmallText)`
	font-size : 18px;
	margin-bottom : 7px;
`

export const ListText = styled(Basic.SmallText)`
	font-family : ${Fonts.GongGothicL}
`

export const EditButton = styled(Basic.Click)`
	width : 60px;
	
	background-color : white;
	elevation : 20;
	border-radius : 15px;
`

export const AddButton = styled(EditButton)`
	height : 40px;
	
	position : absolute;
	right : 0;
	bottom : 0;
`

export const ButtonText = styled(Basic.SmallText)`
	margin : auto;
`

