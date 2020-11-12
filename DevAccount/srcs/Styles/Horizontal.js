import styled from 'styled-components/native'

const Horizontal = styled.View`
	display : flex;
	flex-direction : row;
	justify-content : ${props => props.space ? "space-between" : "flex-start"}
`

export { Horizontal }