import { useState, useEffect } from 'react'
import * as storage from './Storage'


function useIncome () {
	const [ income, setIncome ] = useState({ assignTotal : 0, details : []});

	const loadIncome = async () => {
		await storage.getData('income', setIncome);
	}

	useEffect(() => {
		loadIncome();
	}, []);

	const addIncome = (detail, changeSurplus) => {
		const assignTotal = income.assignTotal + detail.value;
		const newIncome = { assignTotal : assignTotal, details : [detail, ...income.details]};
		setIncome(newIncome);
		storage.setData('income', newIncome);
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
		const newIncome = {assignTotal : assignTotal, details : details}
		setIncome(newIncome);
		storage.setData('income', newIncome);
		changeSurplus(assignTotal);
	}

	const removeIncome = (detail, changeSurplus) => {
		const details = income.details.filter(e => e.name !== detail.name);
		const assignTotal = details.reduce((acc, cur) => acc + cur.value, 0);
		const newIncome = {assignTotal : assignTotal, details : details}
		setIncome(newIncome);
		storage.setData('income', newIncome);
		changeSurplus(assignTotal);
	}

	return [ income, addIncome, modIncome, removeIncome ];
}

export default useIncome;

