import AsyncStorage from '@react-native-community/async-storage'
import React, { createContext, useState, useEffect } from 'react'

const getData = async (name, setData) => {
	try {
		const data = await AsyncStorage.getItem(name);
		if (data != null)
			setData(JSON.parse(data))
	}
	catch (e) {
		console.log(name, "\n", e);
	}
}

export default getData;