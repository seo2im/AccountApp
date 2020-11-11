import React from 'react'
import { Text, FlatList } from 'react-native'

import * as styled from "../Styles/Basic"

function MainList ({name, data, navigation, linkName}) {
	return (
		<styled.MainItemContainer>
			<styled.MainListText
				onPress={() => navigation.navigate(linkName)}>
				{name}
			</styled.MainListText>
			<FlatList
				data={data.lists}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				ListEmptyContent={<Text>No Item</Text>}
				renderItem={({item, index}) => (
					<styled.List>
						<styled.ListHead onPress={() => navigation.navigate(linkName,  item.name)}>{item.name}</styled.ListHead>
						<Text>{item.assignTotal} - {item.useTotal} = {item.balance}</Text>
					</styled.List>
				)}
			/>
		</styled.MainItemContainer>
	)
}

export default MainList