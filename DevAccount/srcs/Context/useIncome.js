import { useState, useEffect } from 'react'

function useIncome () {
	const [ income, setIncome ] = useState({ total : 0, details : []});

	const initIncome = async () => {
		//await getData('income', setIncome);
	}

	const testInitIncome = () => {
		setIncome({total : 912000, details : [{name : "Education", value : 912000}]})
	}

	useEffect(() => testInitIncome(), []);

	const addIncome = (detail, callback) => {
		const total = income.total + detail.value;
		setIncome({ total : total, details : [detail, ...income.details]})
		callback(); // ChangeSurplus
	}
	
	const modIncome = (detail, callback) => {
		const details = income.details.map(e => {
			if (e.name === detail.name)
				return detail;
			else
				return e;
		});
		const total = details.reduce((acc, cur) => acc + cur.value, 0);
		setIncome({total : total, details : details});
		callback(); // ChangeSurplus
	}	

	return [ income, addIncome, modIncome ];
}

export default useIncome;

