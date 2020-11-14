import { useState, useEffect } from 'react'

function useFixedExpense() {
	const [ fixedExpense, setFixedExpense ] = useState({ total : 0, details : []});

	const loadFixedExpense = async () => {
		//await getData('fixedExpense', setFixedExpense);
	}

	const testInitFixedExpense = () => {
		setFixedExpense({total : 422650,
			details : [{name : "생활비", value : 150000},
						{name : "할부", value : 140000},
						{name : "Adobe", value : 23100},
						{name : "Phone" , value : 89550},
						{name : "청약", value : 20000}]})
	}

	useEffect(() => testInitFixedExpense(), []);

	const addFixedExpense = (detail, changeSurplus) => {
		const total = fixedExpense.total + detail.value;
		setFixedExpense({ total : total, details : [detail, ...fixedExpense.details]})
		changeSurplus(total); 
	}

	const modFixedExpense = (detail, changeSurplus) => {
		const details = fixedExpense.details.map(e => {
			if (e.name === detail.name)
				return detail;
			else
				return e;
		});
		const total = details.reduce((acc, cur) => acc + cur.value, 0);
		setFixedExpense({total : total, details : details});
		changeSurplus(total); 
	}

	return [ fixedExpense, addFixedExpense, modFixedExpense ];
}

export default useFixedExpense;


