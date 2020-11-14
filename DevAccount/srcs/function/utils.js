export const NextMonth =
({account, modAccount,
	surplus, initSurplus,
	mustExpense, initMustExpense}) => 
{
	modAccount(account
		+ (surplus.assignTotal - surplus.useTotal)
		+ (mustExpense.assignTotal - mustExpense.useTotal))
	initSurplus();
	initMustExpense();
}