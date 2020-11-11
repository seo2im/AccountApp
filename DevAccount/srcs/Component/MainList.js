import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'

import * as styled from "../Styles/Basic"

function MainList ({name, data, navigation, linkName}) {
	return (
		<styled.Box style={{marginTop : 3}}>
			<FlatList
				data={data.lists}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				renderItem={({item, index}) => (
					<TouchableOpacity
						onPress={() => navigation.navigate(linkName,  item.name)}
						style={{marginBottom : index === data.lists.length - 1 ? 0 : 30}}>
						<styled.BoxName>
							{item.name}
						</styled.BoxName>
						<styled.BoxValue>{item.balance}</styled.BoxValue>
					</TouchableOpacity>
				)}
			/>
		</styled.Box>
	)
}

export default MainList