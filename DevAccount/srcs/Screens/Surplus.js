import React, { useContext } from 'react'
import { View, Text, FlatList, Button } from 'react-native'

import { Context } from '../Context/Context'

import * as styled from '../Styles/Basic'

function SurplusView ({navigation}) {
	const { assignTotal, useTotal, details } = useContext(Context).surplus;

	return (
		<View>
			<Text>남은돈 : {assignTotal - useTotal}</Text>
			<Text>총액 : {assignTotal} 사용액 : {useTotal}</Text>
			<styled.Button title="Add" onPress={() => navigation.navigate("SurplusEditor", {id : null})} />
			<FlatList
				data={details}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				ListEmptyContent={<Text>No Item</Text>}
				renderItem={({item, index}) => (
					<styled.List>
						<Text onPress={() => navigation.navigate("SurplusEditor", {id : item.id})}>{item.name} {item.date} {item.value}</Text>
					</styled.List>
				)}
			/>
		</View>
	)
}

export default SurplusView;