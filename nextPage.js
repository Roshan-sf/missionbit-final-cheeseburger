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
	if(currentImage > 3){
		currentImage = 0 
		panelImage.setAttribute('src', './Comics/' + comicNumber + '/' + comicNumber + images[currentImage])
	}else{
		panelImage.setAttribute('src','./Comics/' + comicNumber + '/' + comicNumber + images[currentImage])
	}
}



function prev(comicNumber) {
	var panelImage = document.querySelector('#panel-image')
	currentImage = currentImage - 1
	if(currentImage < 0){
	currentImage = 0	
	panelImage.setAttribute('src','./Comics/' + comicNumber + '/' + comicNumber + images[currentImage])
	}else{
	panelImage.setAttribute(
		'src',
		 './Comics/' + comicNumber + '/' + comicNumber + images[currentImage])
	}

}