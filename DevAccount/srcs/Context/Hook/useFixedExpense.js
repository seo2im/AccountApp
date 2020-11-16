import { useState, useEffect } from 'react'
import * as storage from '../Storage'

function useFixedExpense() {
	const [ fixedExpense, setFixedExpense ] = useState({ assignTotal : 0, details : []});

	const loadFixedExpense = async () => {
		await storage.getData('fixedExpense', setFixedExpense);
	}

	useEffect(() => { 
		loadFixedExpense();
	}, []);

	const addFixedExpense = (detail, changeSurplus) => {
		const assignTotal = fixedExpense.assignTotal + detail.value;
		const newFixedExpense = { assignTotal : assignTotal, details : [detail, ...fixedExpense.details]};
		setFixedExpense(newFixedExpense);
		storage.setData("fixedExpense", newFixedExpense);
		changeSurplus(assignTotal);
	}

	const modFixedExpense = (detail, changeSurplus) => {
		const details = fixedExpense.details.map(e => {
			if (e.name === detail.name)
				return detail;
			else
				return e;
		});
		const assignTotal = details.reduce((acc, cur) => acc + cur.value, 0);
		const newFixedExpense = {assignTotal : assignTotal, details : details};
		setFixedExpense(newFixedExpense);
		storage.setData('fixedExpense', newFixedExpense);
		changeSurplus(assignTotal); 
	}

	const removeFixedExpense = (detail, changeSurplus) => {
		const details = fixedExpense.details.filter(e => e.name !== detail.name);
		const assignTotal = details.reduce((acc, cur) => acc + cur.value, 0);
		const newFixedExpense = {assignTotal : assignTotal, details : details};
		setFixedExpense(newFixedExpense);
		storage.setData('fixedExpense', newFixedExpense);
		changeSurplus(assignTotal); 
	}

	return [ fixedExpense, addFixedExpense, modFixedExpense, removeFixedExpense ];
}

export default useFixedExpense;


