// Напишите стрелочную функцию с именем sleep, использующую Promise, которая принимает в качестве единственного аргумента количество миллисекунд и возвращает промис, который успешно исполнится через количество миллисекунд из аргумента.

const sleep = milliseconds => new Promise((resolve, reject) => {
	let sleeping = 'sleeping'

	setTimeout(() => {
	 	resolve(sleeping)
	 }, milliseconds)
})

sleep(5000)
	.then(result => {
	console.log(result)
	})


	