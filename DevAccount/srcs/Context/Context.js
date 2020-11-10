import React, { createContext, useState, useEffect } from 'react'

/*
	income/fixed.Expense.details : 
	[{ name : string, value : number }]

	mustExpense.lists :
	[{
		name : string
		assignTotal : number, 
		byCost : number,
		count : number,
		useTotal : number,
		details : { name : string, date : date, value : number },
		balance : number
	}]

	surplus.details : 
	[{ name : name, date : date, value : number }]
*/

const Context = createContext({
	account : 0,
	modAccount : () => {},
	income : { total : 0, details : []},
	modIncome : () => {},
	fixedExpense : { total : 0, details : []},
	modFixedExpense : () => {},
	mustExpense : { assignTotal : 0, useTotal : 0, lists : []},
	modMustExpense : () => {},
	surplus : { assignTotal : 0, useTotal : 0, details : []},
	modSurplus : () => {}
})

function ContextProvider ({ children }) {
	const [ account, setAccount ] = useState(5);
	const [ income, setIncome ] = useState({ total : 0, details : []});
	const [ fixedExpense, setFixedExpense ] = useState({ total : 0, details : []});
	const [ mustExpense, setMustExpense ] = useState({ assignTotal : 0, useTotal : 0, lists : []});
	const [ surplus, setSurplus ] = useState({ assignTotal : 0, useTotal : 0, details : []});

	const modAccount = (value) => {
		setAccount(value);
	}

	const modSurplus = (mode, detail) => {
		switch (mode) {
			case "CHANGE" :
				const assignTotal = surplus.assignTotal + detail.value;
				setSurplus({...surplus, assignTotal : assignTotal});
				break;
			case "USE" :
				const useTotal = surplus.useTotal + detail.value;
				setSurplus({...surplus, useTotal : useTotal, details : [detail, ...surplus.details]})
				break;
		}
	}

	const modIncome = (detail) => {
		const total = income.total + detail.value;
		setIncome({ total : total, details : [detail, ...income.details]})
		modSurplus("CHANGE", {value : detail.value})
	}

	const modFixedExpense = (detail) => {
		const total = fixedExpense.total + detail.value;
		setFixedExpense({ total : total, details : [detail, ...fixedExpense.details]})
		modSurplus("CHANGE", {value : -detail.value})
	}

	const modMustExpense = (mode, detail) => {
		const { kind, ...data } = detail

		switch (mode) {
			case "CHANGE" :				
				const {byCost, count} = data;
				let diff = mustExpense.lists.find(e => e.name === kind).assignTotal;
				const changedList = mustExpense.lists.map(e => {
					if (e.name === kind) {
						return {...e, byCost : byCost, count : count, assignTotal : byCost * count, balance : byCost * count - e.useTotal}
					}
					else
						return e;
				})
				diff -= changedList.find(e => e.name === kind).assignTotal;
				setMustExpense({...mustExpense, assignTotal : mustExpense.assignTotal - diff, lists : changedList});
				modSurplus("CHANGE", {value : diff})
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


	const initData = async () => { /* TODO : function devide : is possible? */
		/*
		await getData('account', setAccount);
		await getData('income', setIncome);
		await getData('fixedExpense', setFixedExpense);
		await getData('mustExpense', setMustExpense);
		await getData('surplus', setSurplus);
		*/
	}

	const testInitData = () => {
		setAccount(5000);
		setIncome({total : 912000, details : [{name : "Education", value : 912000}]})
		setFixedExpense({total : 422650,
						details : [{name : "생활비", value : 150000},
									{name : "할부", value : 140000},
									{name : "Adobe", value : 23100},
									{name : "Phone" , value : 89550},
									{name : "청약", value : 20000}]})
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
		setSurplus({assignTotal : 393350, useTotal : 10000,
						details : [{name : "jam", date : "20201108", value : 2000},
									{name : "jam2", date : "20201106", value : 4000},
									{name : "jam3", date : "20201102", value : 4000}]})
	}

	useEffect(() => {
		testInitData();
	}, []);

	return (
		<Context.Provider value={{
			account, income, fixedExpense, mustExpense, surplus
			,modAccount, modIncome, modFixedExpense, modMustExpense, modSurplus
		}}>
			{children}
		</Context.Provider>
	)
}

export { Context, ContextProvider };