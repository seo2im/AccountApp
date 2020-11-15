import { useState, useEffect } from 'react';
import * as storage from './Storage'

function useSurplus() {
	const [ surplus, setSurplus ] = useState({income : 0, fixedExpense : 0, mustExpense : 0, assignTotal : 0, useTotal : 0, details : []});

	const loadSurplus = async () => {
		await storage.getData('surplus', setSurplus);
	}

	useEffect(() => {
		loadSurplus();
	}, []);

	const initSurplus = () => {
		const newSurplus = {...surplus, useTotal : 0, details : []}
		setSurplus(newSurplus);
		storage.setData('surplus', newSurplus);
	}

	const changeSurplusAssign = (kind, value) => {
		let newSurplus = {};

		switch (kind) {
			case "income" :
				newSurplus = {...surplus, income : value, assignTotal : value - surplus.fixedExpense - surplus.mustExpense};
				break;
			case "fixedExpense" :
				newSurplus = {...surplus, fixedExpense : value, assignTotal :  surplus.income - value - surplus.mustExpense}
				break;
			case "mustExpense" :
				newSurplus = {...surplus, mustExpense : value, assignTotal :  surplus.income - surplus.fixedExpense - value}
		}
		setSurplus(newSurplus);
		storage.setData('surplus', newSurplus);
	}

	const addSurplus = ({name, date, value}) => {
		const useTotal = surplus.useTotal + value;
		const id = surplus.details.length;
		const newSurplus = {...surplus, useTotal : useTotal, details : [{id, name, date, value}, ...surplus.details]}
		setSurplus(newSurplus);
		storage.setData('surplus', newSurplus);
	}

	const modSurplus = ({id, name, date, value}) => {
		const details = surplus.details.map(e => {
			if (e.id === id)
				return {id, name, date, value};
			else
				return e;
		})
		const useTotal = details.reduce((acc, cur) => acc + cur.value, 0);
		const newSurplus = {...surplus, useTotal : useTotal, details : details};
		setSurplus(newSurplus);
		storage.setData('surplus', newSurplus);
	}

	const removeSurplus = ({id}) => {
		const details = surplus.details.filter(e => e.id !== id);
		const useTotal = details.reduce((acc, cur) => acc + cur.value, 0);
		const newSurplus = {...surplus, useTotal : useTotal, details : details};
		setSurplus(newSurplus);
		storage.setData('surplus', newSurplus);
	}

	return [surplus, changeSurplusAssign, addSurplus, modSurplus, removeSurplus, initSurplus]
}

export default useSurplus;