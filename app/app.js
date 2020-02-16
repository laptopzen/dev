$.get('https://dev.to/api/articles', data => {
	banyak = data[0].id
})

console.log(banyak)