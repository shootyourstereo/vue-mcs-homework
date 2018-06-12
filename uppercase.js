// Оберните в Promise (профисифицируйте) следующую функцию которую мы использовали в примерах ранее. Помните, что мы должны не только изменить состояние Promise, но и вернуть данные:

 const anythingToLowerCase = anything => new Promise((resolve, reject) => {
 let result = String(anything).toLowerCase()
 setTimeout(() => {
	 	resolve(result)
	 }, 1000)
})

 anythingToLowerCase("UPPERCASE")
	.then(result => {
	console.log(result)
})
