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
		}}>
			{children}
		</Context.Provider>
	)
}

export { Context, ContextProvider };