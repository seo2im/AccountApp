import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native';

import { Box } from '~/srcs/Component'
import * as styled from '~/srcs/Styles/MainView'
import { BoxTitle, BoxValue } from '~/srcs/Styles/Box' 

function MustExpenseBox ({navigation, data}) {
	return (
		<>
			<styled.Title
					onPress={() => navigation.navigate("MustExpenseStack")}>
					필수 지출
			</styled.Title>
			<Box>
				<FlatList
					data={data.lists}
					keyExtractor={(item, index) => (`${index}_${item.name}`)}
					renderItem={({item, index}) => (
						<TouchableOpacity
							onPress={() => navigation.navigate("MustExpenseStack",  item.name)}
							style={{marginBottom : index === data.lists.length - 1 ? 0 : 30}}>
							<BoxTitle fontSize="15px">
								{item.name}
							</BoxTitle>
							<BoxValue>{item.balance}</BoxValue>
						</TouchableOpacity>
					)}
				/>
			</Box>
		</>
	)
}

export default MustExpenseBox