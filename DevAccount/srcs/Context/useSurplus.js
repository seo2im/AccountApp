import { useState, useEffect } from 'react';

function useSurplus() {
	const [ surplus, setSurplus ] = useState({ assignTotal : 0, useTotal : 0, details : []});

	const initSurplus = async () => {
		//await getData('fixedExpense', setFixedExpense);
	}

	const testInitSurplus = () => {
		setSurplus({assignTotal : 393350, useTotal : 10000,
					details : [{name : "jam", date : "20201108", value : 2000},
								{name : "jam2", date : "20201106", value : 4000},
								{name : "jam3", date : "20201102", value : 4000}]})
	}

	useEffect(() => testInitSurplus(), []);

	const changeSurplusAssign = (assign) => {
		setSurplus({...surplus, assignTotal : assign});
	}

	const addSurplus = (detail) => {
		const useTotal = surplus.useTotal + detail.value;
		setSurplus({...surplus, useTotal : useTotal, details : [detail, ...surplus.details]})
	}

	const modSurplus = (detail) => {
		const details = surplus.details.map(e => {
			if (e.name === detail.name)
				return detail;
			else
				return e;
		})
		const useTotal = details.reduce((acc, cur) => acc + cur.value, 0);
		setSurplus({...surplus, useTotal : useTotal, details : details})
	}

	return [surplus, changeSurplusAssign, addSurplus, modSurplus]
}

export default useSurplus;