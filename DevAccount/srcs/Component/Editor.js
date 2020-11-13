import React from 'react'
import { Modal } from 'react-native'


function Editor ({children, visible, setVisible}) {
	return (
		<Modal 
				animationType="slide"
				transparent={true}
				visible={visible}
				onRequestClose={() => setVisible(false)}>
				{children}
		</Modal>
	)
}

export default Editor;