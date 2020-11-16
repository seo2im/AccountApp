import { useState, useEffect } from 'react'
import * as storage from '../Storage'

function useAccount () {
	const [ account, setAccount ] = useState(0);

	const loadAccount = async () => {
		await storage.getData('account', setAccount);
	}

	useEffect(() => {
		loadAccount()
	}, []);

	const modAccount = (value) => {
		setAccount(value);
		storage.setData("account", value);
	}
	
	return [ account, modAccount ];
}

export default useAccount;