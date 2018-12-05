var images = [
	'-1.png',
	'-2.png',
	'-3.png',
	'-4.png',
]

var currentImage = 0

function next(comicNumber) {
	var panelImage = document.querySelector('#panel-image')
	currentImage = currentImage + 1
	panelImage.setAttribute(
		'src',
		'./Comics/' + comicNumber + '/' + comicNumber + images[currentImage]
	)
}



function prev(comicNumber) {
	var panelImage = document.querySelector('#panel-image')
	currentImage = currentImage - 1
	panelImage.setAttribute(
		'src',
		 './Comics/' + comicNumber + '/' + comicNumber + images[currentImage])
}

