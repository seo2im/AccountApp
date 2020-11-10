import { useState, useEffect } from 'react'

function useMustExpense () {
	const [ mustExpense, setMustExpense ] = useState({ assignTotal : 0, useTotal : 0, lists : []});

	const initMustExpense = async () => {
		//await getData('mustExpense', setMustExpense);
	}

	const testInitMustExpense = () => {
		setMustExpense({assignTotal : 96000, useTotal : 20000,
			lists : [{
				name : "Coffee",
				assignTotal : 65600,
				byCost : 4100,
				count : 16,
				useTotal : 20000,
				details : [{name : "StarBucks", date : "20201105", value : 10000},
							{name : "StarBucks", date : "20201101", value : 10000}],
				balance : 45600
			},{
				name : "교통",
				assignTotal : 26400,
				byCost : 3300,
				count : 8,
				useTotal : 10000,
				details : [{name : "Card", date : "20201101", value : 10000}],
				balance : 16400
			}]});
	}

	useEffect(() => testInitMustExpense(), []);

	const addMustExpense = ({name, byCost, count}, callback) => {
		const lists = [...mustExpense.lists, { name, byCost, count, assignTotal : byCost * count, useTotal : 0, details : [], balance : byCost * count}]
		setMustExpense({...setMustExpense, lists : lists});
		callback(); //changeSurplusAssign
	}

	const modMustExpense = ({name, byCost, count}, callback) => {
		const lists = mustExpense.lists.map(e => {
			if (e.name === name)
				return {...e, byCost : byCost, count : count, assignTotal : byCost * count, balance : byCost * count - e.useTotal}
			else
				return e;
		})
		const assignTotal = mustExpense.lists.reduce((acc, cur) => acc + cur.useTotal, 0);
		setMustExpense({...mustExpense, assignTotal : assignTotal, lists : lists});
		callback(); //chagneSurplusAssign
	}

	const addMustExpenseItem = () => {

	}

	const modMustExpenseItem = () => {
		
	}

/*
	const modMustExpense = (mode, detail) => {
		const { kind, ...data } = detail

		switch (mode) {
			case "CHANGE" :				
				
				break;
			case "USE" :
				const {name, date, value} = data;
				const useList = mustExpense.lists.map(e => {
					if (e.name === kind) {
						const useTotal = e.useTotal + value;
						return ({...e, useTotal : useTotal, details : [{name, date, value}, ...e.details], balance : e.assignTotal - useTotal})
					}
					else
						return e;
				})
				setMustExpense({...mustExpense, useTotal : mustExpense.useTotal + value, lists : useList});
				break;
		}
	}
*/

	return [mustExpense, addMustExpense, modMustExpense];
}

export default useMustExpense;

