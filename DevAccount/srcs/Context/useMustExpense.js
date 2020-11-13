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
				details : [{id : 1, name : "StarBucks", date : "20201105", value : 10000},
							{id : 0, name : "StarBucks", date : "20201101", value : 10000}],
				balance : 45600
			},{
				name : "교통",
				assignTotal : 26400,
				byCost : 3300,
				count : 8,
				useTotal : 10000,
				details : [{id : 0, name : "Card", date : "20201101", value : 10000}],
				balance : 16400
			}]});
	}

	useEffect(() => testInitMustExpense(), []);

	const addMustExpense = ({name, byCost, count}, changeSurplus) => {
		const lists = [...mustExpense.lists, { name, byCost, count, assignTotal : byCost * count, useTotal : 0, details : [], balance : byCost * count}]
		const assignTotal = mustExpense.assignTotal + byCost * count;
		setMustExpense({...mustExpense, assignTotal : assignTotal, lists : lists});
		changeSurplus(assignTotal);
	}

	const modMustExpense = ({name, byCost, count}, changeSurplus) => {
		const lists = mustExpense.lists.map(e => {
			if (e.name === name)
				return {...e, byCost : byCost, count : count, assignTotal : byCost * count, balance : byCost * count - e.useTotal}
			else
				return e;
		})
		const assignTotal = lists.reduce((acc, cur) => acc + cur.assignTotal, 0);
		setMustExpense({...mustExpense, assignTotal : assignTotal, lists : lists});
		changeSurplus(assignTotal);
	}

	const addMustExpenseItem = ({kind, name, date, value}) => {
		const lists = mustExpense.lists.map(e => {
			if (e.name === kind) {
				const id = e.details.length;
				const useTotal = e.useTotal + value;
				return ({...e, useTotal : useTotal, details : [{id, name, date, value}, ...e.details], balance : e.assignTotal - useTotal})
			}
			else
				return e;
		})
		setMustExpense({...mustExpense, useTotal : mustExpense.useTotal + value, lists : lists});
	}

	const modMustExpenseItem = ({kind, id, name, date, value}) => {
		const lists = mustExpense.lists.map(e => {
			if (e.name === kind) {
				const details = e.details.map(d => {
					if (d.id === id)
						return {id, name, date, value};
					else
						return d;
				})
				const useTotal = details.reduce((acc, cur) => acc + cur.value, 0);
				return {...e, useTotal : useTotal, details : details, balance : e.assignTotal - useTotal};
			}
			else
				return e;
		})
		setMustExpense({...mustExpense, useTotal : mustExpense.lists.reduce((acc, cur) => acc + cur.useTotal, 0), lists : lists});
	}

	return [mustExpense, addMustExpense, modMustExpense, addMustExpenseItem, modMustExpenseItem ];
}

export default useMustExpense;

