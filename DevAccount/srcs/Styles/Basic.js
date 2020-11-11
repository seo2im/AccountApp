import styled from 'styled-components/native'
import { Fonts }  from './Fonts'

const Box = styled.View`
	background-color : white;
	border-radius : 10px;
	padding : 15px 25px 15px 25px;
	margin : 25px 15px 0 15px;
	elevation : 10;
`

const BoxTitle = styled.Text`
	font-family : ${Fonts.GongGothicB};
	font-size : 20px;
	margin : 25px 15px 0 25px;
`

const BoxName = styled.Text`
	font-family : ${Fonts.GongGothicM};
	font-size : 15px;
	margin-bottom : 10px;
`

const BoxValue = styled.Text`
	font-family : ${Fonts.GongGothicB}
	font-size : 20px;
`

const ViewContainer = styled.View`
	margin : 20px;
`

const Title = styled.Text`
	font-family : ${Fonts.GongGothicB}
	font-size : 25px;
	margin-bottom : 10px;
`

const Value = styled.Text`
	font-family : ${Fonts.GongGothicB}
	font-size : 30px;
	margin-bottom : 20px;
`
const SubBox = styled.View`
	border-top-width : 2.5px;
	border-bottom-width : 2.5px;
	padding-top : 10px;
	margin-bottom : 20px;
`

const SubText = styled.Text`
	font-family : ${Fonts.GongGothicM};
	font-size : 15px;
	margin-bottom : 10px;
`

const List = styled.TouchableOpacity`
	margin-bottom : 20px;
`

const ListTitle = styled.Text`
	font-family : ${Fonts.GongGothicM};
	margin-bottom : 7px;
	font-size : 18px;
`

const ListText = styled.Text`
	font-family : ${Fonts.GongGothicL};
	font-size : 15px;
`

const MainItemContainer = styled.View`
	background-color : white;
	border-radius : 10px;
	padding : 15px;
	margin : 15px;
	elevation : 20;
`

const MainItemText = styled.Text`
	font-size : 15px;
`

const MainListText = styled.Text`
	font-size : 15px;
	border-bottom-color : black;
	border-bottom-width : 1px;
	margin-bottom : 10px;
`

const Button = styled.Button`
	margin : 1rem;
`



const ListHead = styled.Text`
	font-weight : bold;
`

export { Box, BoxName, BoxValue, BoxTitle,
			ViewContainer, Title, Value, SubBox, SubText, List, ListTitle, ListText,
	ListHead, MainListText, MainItemContainer, MainItemText, Button };