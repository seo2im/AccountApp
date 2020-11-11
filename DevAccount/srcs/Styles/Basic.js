import styled from 'styled-components/native'

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

const List = styled.View`
	margin-bottom : 10px
`

const ListHead = styled.Text`
	font-weight : bold;
`

export { ListHead, MainListText, MainItemContainer, MainItemText, Button, List };