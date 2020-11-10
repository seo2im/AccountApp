import React, { createContext, useState, useEffect } from 'react'


import useAccount from './useAccount'
import useIncome from "./useIncome"
import useFixedExpense from "./useFixedExpense"
import useSurplus from "./useSurplus"
import useMustExpense from './useMustExpense'
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
	
})

function ContextProvider ({ children }) {
	
	const [ account, modAccount ] = useAccount(); 
	const [ income, addIncome, modIncome ] = useIncome();
	const [ fixedExpense, addFixedExpense, modFixedExpense] = useFixedExpense();
	const [ surplus, changeSurplusAssign, addSurplus, modSurplus ] = useSurplus();
	const [ mustExpense ] = useMustExpense();

	return (
		<Context.Provider value={{
			account, modAccount,
			income, addIncome, modIncome,
			fixedExpense, addFixedExpense, modFixedExpense,
			surplus, changeSurplusAssign, addSurplus, modSurplus,
			mustExpense 
		}}>
			{children}
		</Context.Provider>
	)
}

export { Context, ContextProvider };