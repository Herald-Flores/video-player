import './src/css/style.css'

// Import modules
import { animatePlayback } from './src/js/playback-animation.js'
import { updateProgress } from './src/js/progress-bar.js'
import { updateTimeElapsed } from './src/js/time-elapsed.js'
import { updateVolumeIcon } from './src/js/volume.js'
import * as videoPlay from './src/js/play-pause.js'
import { handleKeyboardShortcuts } from './src/js/keyboard-shortcuts.js'
import { setVideoSpeed } from './src/js/speed'

// Define the event listeners as an object
const eventListeners = {
	play: videoPlay.updatePlayButton,
	pause: videoPlay.updatePlayButton,
	loadedmetadata: videoPlay.initializeVideo,
	timeupdate: [updateTimeElapsed, updateProgress],
	volumechange: updateVolumeIcon,
	click: [videoPlay.togglePlay, animatePlayback]
}

// Attach the event listeners to the video element
for (const eventType in eventListeners) {
	const listeners = eventListeners[eventType]
	if (Array.isArray(listeners)) {
		for (const listener of listeners) {
			videoPlay.video.addEventListener(eventType, listener)
		}
	} else {
		videoPlay.video.addEventListener(eventType, listeners)
	}
}

// Attach a keyboard shortcut listener to the document
document.addEventListener('keyup', handleKeyboardShortcuts)


const speedBtn = document.querySelector('#speedButton')
if (speedBtn) {
	speedBtn.addEventListener('click', () => {
		document.querySelector('#dropdown-speed').classList.toggle('hidden')
	})
}

const speedOptions = document.querySelector('#options-speed')

speedOptions.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		const text = event.target.innerText
		const value = event.target.dataset.speed

		speedBtn.innerHTML = text
		setVideoSpeed(value)
	}
})
