import React from 'react'
import { FlatList } from 'react-native'

import { Sider } from '~/srcs/Component'
import * as styled from '~/srcs/Styles/ShowView'

function ItemList ({lists, onPress, date}) {

	return (
		<FlatList
				data={lists}
				keyExtractor={(item, index) => (`${index}_${item.name}`)}
				renderItem={({ item }) => (
					<styled.ListClick
						onPress={() => {
							date ? onPress(item.id)
							: onPress(item.name);
						}}>
						{date ? <styled.ListTitle>{item.date}</styled.ListTitle> : null}
						<Sider title={item.name} value={item.value} />
					</styled.ListClick>
				)}
			/>
	)
}

export default ItemList;