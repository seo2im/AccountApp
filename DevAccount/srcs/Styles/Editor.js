import styled from 'styled-components/native'
import Fonts from './Fonts'

const EditContainer = styled.View`
	width : 100%;
	border-top-left-radius : 40px;
	border-top-right-radius : 40px;
	background-color : white;
	elevation : 20;
	padding : 50px 20px;
	position : absolute;
	bottom : 0;
`
const Text = styled.Text`
	font-family : ${Fonts.GongGothicB};
	font-size : 30px;
	text-align : center;
`

const Title = styled.Text`
	font-family : ${Fonts.GongGothicM};
	font-size : 20px;
	margin-top : 15px;
	text-align : center;
	width : 25%;
`

const Input = styled.TextInput`
	font-family : ${Fonts.GongGothicB};
	font-size : 20px;
	border-left-width : 0;
	border-right-width : 0;
	border-top-width : 0;
	border-bottom-width : 2px;

	width : 70%;
` 

const Set = styled.TouchableOpacity`
	border-radius : 30px;
	border-width : 3px;
	background-color : white;
	padding : 5px;
	margin : 50px 70px 0 70px;
`

export { EditContainer, Input, Set, Text, Title }