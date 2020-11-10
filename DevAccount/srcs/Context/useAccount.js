import { useState, useEffect } from 'react'

function useAccount () {
	const [ account, setAccount ] = useState(5);

	const initAccount = async () => {
		//await getData('account', setAccount);
	}

	const testInitAccount = () => {
		setAccount(5000);
	}

	useEffect(() => testInitAccount(), []);

	const modAccount = (value) => {
		setAccount(value);
	}
	
	return [ account, modAccount ];
}

export default useAccount;