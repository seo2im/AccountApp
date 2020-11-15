import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const getData = async (name, setData) => {
	try {
		const data = await AsyncStorage.getItem(name);
		if (data !== null)
			setData(JSON.parse(data))
	}
	catch (e) {
		console.log(name, "data cant access in storage :\n", e);
	}
}

export const setData = (name, data) => {
	try {
		AsyncStorage.setItem(name, JSON.stringify(data));
	}
	catch (e) {
		console.log(name, "data cant setting in storage\n", e);
	}
	
}

export const initData = () => {
	try {
		AsyncStorage.clear();
	}
	catch (e) {
		console.log("initial error", e);
	}
}