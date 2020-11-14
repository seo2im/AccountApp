import { useState, useEffect } from 'react';

function useSurplus() {
	const [ surplus, setSurplus ] = useState({ assignTotal : 0, useTotal : 0, details : []});

	const loadSurplus = async () => {
		//await getData('fixedExpense', setFixedExpense);
	}

	const testInitSurplus = () => {
		setSurplus({income : 912000, fixedExpense : 422650, mustExpense : 96000, assignTotal : 393350, useTotal : 10000,
					details : [{id : 2, name : "jam", date : "20.11.08", value : 2000},
								{id : 1, name : "jam2", date : "20.11.06", value : 4000},
								{id : 0, name : "jam3", date : "20.11.02", value : 4000}]})
	}

	useEffect(() => testInitSurplus(), []);

	const initSurplus = () => {
		setSurplus({...surplus, useTotal : 0, details : []})
	}

	const changeSurplusAssign = (kind, value) => {
		switch (kind) {
			case "income" :
				setSurplus({...surplus, income : value, assignTotal : value - surplus.fixedExpense - surplus.mustExpense})
				break;
			case "fixedExpense" :
				setSurplus({...surplus, fixedExpense : value, assignTotal :  surplus.income - value - surplus.mustExpense})
				break;
			case "mustExpense" :
				setSurplus({...surplus, mustExpense : value, assignTotal :  surplus.income - surplus.fixedExpense - value})
		}
	}

	const addSurplus = ({name, date, value}) => {
		const useTotal = surplus.useTotal + value;
		const id = surplus.details.length;
		setSurplus({...surplus, useTotal : useTotal, details : [{id, name, date, value}, ...surplus.details]})
	}

	const modSurplus = ({id, name, date, value}) => {
		const details = surplus.details.map(e => {
			if (e.id === id)
				return {id, name, date, value};
			else
				return e;
		})
		const useTotal = details.reduce((acc, cur) => acc + cur.value, 0);
		setSurplus({...surplus, useTotal : useTotal, details : details})
	}

	return [surplus, changeSurplusAssign, addSurplus, modSurplus, initSurplus]
}

export default useSurplus;