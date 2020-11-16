import React from 'react'
import Native from 'react-native'

function Modal ({children, visible, setVisible}) {
	return (
		<Native.Modal 
				animationType="slide"
				transparent={true}
				visible={visible}
				onRequestClose={() => setVisible(false)}>
				{children}
		</Native.Modal>
	)
}

export default Modal;