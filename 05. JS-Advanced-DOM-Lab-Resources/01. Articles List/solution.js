function createArticle() {
	//TODO...
	let titleContent = document.querySelector('input')
	let articleContent = document.querySelector('textarea')

	if (titleContent.value !== '' && articleContent.value !== '') {
		let heading = document.createElement('h3')
		heading.innerHTML = titleContent.value
		let paragraph = document.createElement('p')
		paragraph.innerHTML = articleContent.value

		let article = document.createElement('article')
		article.appendChild(heading)
		article.appendChild(paragraph)

		document.getElementById('articles').appendChild(article)

		titleContent.value = '';
		articleContent.value = '';
	}

}