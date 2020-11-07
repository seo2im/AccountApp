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
	income : { total : 0, details : []},
	fixedExpense : { total : 0, details : []},
	mustExpense : { assignTotal : 0, useTotal : 0, lists : []},
	surplus : { assignTotal : 0, useTotal : 0, details : []}
})

function ContextProvider ({ children }) {
	const [ account, setAccount ] = useState(5);
	const [ income, setIncome ] = useState({ total : 0, details : []});
	const [ fixedExpense, setFixedExpense ] = useState({ total : 0, details : []});
	const [ mustExpense, setMustExpense ] = useState({ assignTotal : 0, useTotal : 0, lists : []});
	const [ surplus, setSurplus ] = useState({ assignTotal : 0, useTotal : 0, details : []});

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
		
	}

	useEffect(() => {
		initData();
	}, []);

	return (
		<Context.Provider value={{
			account, income, fixedExpense, mustExpense, surplus
		}}>
			{children}
		</Context.Provider>
	)
}

export { Context, ContextProvider };