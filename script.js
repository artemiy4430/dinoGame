let dino = document.querySelector('.dino')
let cactus = document.querySelector('.cactus')
let doubleCactus = document.querySelector('.doubleCactus')


document.addEventListener('keydown', function (event) {
	if(event.key === 'ArrowUp' )
	{
		jump()
	}
})

function jump() {
	if (!dino.classList.contains('jump')) {

		dino.classList.add('jump')
	}
	setTimeout(function () {
		
		dino.classList.remove('jump')
	}, 300)
}


let isAlive = setInterval(function () {
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
	let cactusLeft = parseInt(
		window.getComputedStyle(cactus).getPropertyValue('left')
	)



	if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
		alert('game over.')
	}
}, 100) 


let currentDuration = 0 
let getFasterAnimation = function () { 
    let speedDuration = ['2.5s', '1s', '2s', '1.5s', '1.6s', '2.7s', '1.9s'] 
 

		function getRandomIndex() {
			let index = Math.floor(Math.random() * speedDuration.length);
			currentDuration = (currentDuration + 1) % speedDuration.length
			return index
		}

 
     
    cactus.style.animationDuration = speedDuration[getRandomIndex()]
    animatedElement.style.animationDuration = speedDuration[getRandomIndex()]
}; 
 
 
cactus.addEventListener('animationiteration', function () { 
 getFasterAnimation() 
})
