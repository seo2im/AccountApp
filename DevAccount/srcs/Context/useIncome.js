import { useState, useEffect } from 'react'

function useIncome () {
	const [ income, setIncome ] = useState({ total : 0, details : []});

	const initIncome = async () => {
		//await getData('income', setIncome);
	}

	const testInitIncome = () => {
		setIncome({assignTotal : 912000, details : [{name : "Education", value : 912000}]})
	}

	useEffect(() => testInitIncome(), []);

	const addIncome = (detail, changeSurplus) => {
		const assignTotal = income.assignTotal + detail.value;
		setIncome({ assignTotal : assignTotal, details : [detail, ...income.details]})
		changeSurplus(assignTotal); 
	}
	
	const modIncome = (detail, changeSurplus) => {
		const details = income.details.map(e => {
			if (e.name === detail.name)
				return detail;
			else
				return e;
		});
		const assignTotal = details.reduce((acc, cur) => acc + cur.value, 0);
		setIncome({assignTotal : assignTotal, details : details});
		changeSurplus(assignTotal); 
	}	

	return [ income, addIncome, modIncome ];
}

export default useIncome;

