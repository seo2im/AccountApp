import React, { useContext } from 'react'
import { View, Text, FlatList, Button } from 'react-native'

import { Context } from '../Context/Context'

function SurplusView ({navigation}) {
	const { assignTotal, useTotal, details } = useContext(Context).surplus;

	return (
		<View>
			<Text>남은돈 : {assignTotal - useTotal}</Text>
			<Text>총액 : {assignTotal} 사용액 : {useTotal}</Text>
			<Button title="Add" onPress={() => navigation.navigate("SurplusEditor", {name : null})} />
			<FlatList
				data={details}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				ListEmptyContent={<Text>No Item</Text>}
				renderItem={({item, index}) => (
					<View>
						<Text onPress={() => navigation.navigate("SurplusEditor", {name : item.name})}>{item.name} {item.date} {item.value}</Text>
					</View>
				)}
			/>
		</View>
	)
}

export default SurplusView;