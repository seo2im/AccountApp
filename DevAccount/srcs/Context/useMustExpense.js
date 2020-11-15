import { useState, useEffect } from 'react'
import * as storage from './Storage'


function useMustExpense () {
	const [ mustExpense, setMustExpense ] = useState({ assignTotal : 0, useTotal : 0, lists : []});

	const loadMustExpense = async () => {
		await storage.getData('mustExpense', setMustExpense);
	}

	useEffect(() => {
		loadMustExpense();
	}, []);

	const initMustExpense = () => {
		const lists = mustExpense.lists.map(e => {
			return {
				...e, useTotal : 0, details : [], balance : e.assignTotal
			}
		})
		const newMustExpense = {...mustExpense, useTotal : 0, lists : lists}
		setMustExpense(newMustExpense);
		storage.setData('mustExpense', newMustExpense);
	}

	const addMustExpense = ({name, byCost, count}, changeSurplus) => {
		const lists = [...mustExpense.lists, { name, byCost, count, assignTotal : byCost * count, useTotal : 0, details : [], balance : byCost * count}]
		const assignTotal = mustExpense.assignTotal + byCost * count;		
		const newMustExpense = {...mustExpense, assignTotal : assignTotal, lists : lists};
		setMustExpense(newMustExpense);
		storage.setData('mustExpense', newMustExpense);
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
		const newMustExpense = {...mustExpense, assignTotal : assignTotal, lists : lists};
		setMustExpense(newMustExpense);
		storage.setData('mustExpense', newMustExpense);
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
		const newMustExpense = {...mustExpense, useTotal : mustExpense.useTotal + value, lists : lists};
		setMustExpense(newMustExpense);
		storage.setData('mustExpense', newMustExpense);
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
		const newMustExpense = {...mustExpense, useTotal : mustExpense.lists.reduce((acc, cur) => acc + cur.useTotal, 0), lists : lists};
		setMustExpense(newMustExpense);
		storage.setData('mustExpense', newMustExpense);
	}

	return [mustExpense, addMustExpense, modMustExpense, addMustExpenseItem, modMustExpenseItem, initMustExpense ];
}

export default useMustExpense;

