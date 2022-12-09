const videoContainer = document.querySelector('#video-container')
const fullscreenButton = document.querySelector('#fullscreen-button')
const fullscreenIcons = fullscreenButton.querySelectorAll('use')

export const toggleFullScreen = () => {
	if (document.fullscreenElement) {
		document.exitFullscreen()
	} else {
		videoContainer.requestFullscreen()
	}
}

export const updateFullscreenButton = () => {
	fullscreenIcons.forEach(icon => icon.classList.toggle('hidden'))

	if (document.fullscreenElement) {
		fullscreenButton.setAttribute('data-title', 'Exit full screen (f)')
	} else {
		fullscreenButton.setAttribute('data-title', 'Full screen (f)')
	}
}


fullscreenButton.addEventListener('click', toggleFullScreen)
videoContainer.addEventListener('fullscreenchange', updateFullscreenButton)
