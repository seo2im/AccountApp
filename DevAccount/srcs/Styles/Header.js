import styled from 'styled-components/native'
import Fonts from './Fonts'

const Header = styled.View`
	height : 50px;
	background-color : black;
`

const Text = styled.Text`
	font-family : ${Fonts.GongGothicB};
	color : white;
	margin : 10px 0 0 20px;
	font-size : 25px;
`

export { Header, Text }