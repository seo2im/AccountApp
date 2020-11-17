import styled from 'styled-components/native'
import Fonts from './Fonts'

export const MediumText = styled.Text`
	font-family : ${Fonts.GongGothicB};
	font-size : 25px;
`

export const SmallText = styled.Text`
	font-family : ${Fonts.GongGothicM}
	font-size : 20px;
`

export const BigText = styled.Text`
	font-family : ${Fonts.GongGothicB}
	font-size : 30px;
`

export const MainView = styled.View`
	margin : 20px 0;
`

export const Box = styled.View`
	background-color : white;
	border-radius : 10px;
	padding : 15px 25px 15px 25px;
	margin : 15px
	elevation : 10;
`

export const Click = styled.TouchableOpacity`

`

export const Horizontal = styled.View`
	display : flex;
	flex-direction : row;
	justify-content : ${props => props.space ? "space-between" : "flex-start"}
`