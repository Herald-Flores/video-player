import { showControls } from './show-hidden-controls'
import { formatTime } from './format-time.js'

// Select elements here
export const video = document.getElementById('video')
export const playButton = document.getElementById('play')
const captionBtn = document.querySelector('#caption-button')

export const togglePlay = () => {
	video[video.paused ? 'play' : 'pause']()
}

export const updatePlayButton = () => {
	const playbackIcons = document.querySelectorAll('.playback-icons use')
	playbackIcons.forEach(icon => icon.classList.toggle('hidden'))

	const dataTitle = video.paused ? 'Play (k)' : 'Pause (k)'
	playButton.setAttribute('data-title', dataTitle)
}

export const initializeVideo = () => {
	const progressInput = document.querySelector('#progress-input')
	const progressBar = document.querySelector('#progress-bar')
	const duration = document.getElementById('duration')
	const videoDuration = Math.round(video.duration)
	const time = formatTime(videoDuration)

	progressInput.setAttribute('max', videoDuration)
	progressBar.setAttribute('max', videoDuration)
	duration.innerText = `${time.minutes}:${time.seconds}`
	duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}

// Add functions here
updatePlayButton(video)

const videoWorks = 'video' in document || !!document.createElement('video').canPlayType
if (videoWorks) {
	video.controls = false
	showControls()
}

playButton.addEventListener('click', togglePlay)

const toggleCaption = () => {
	const track = video.textTracks[0]
	if (track.mode === 'showing') {
		track.mode = 'hidden'
	} else {
		track.mode = 'showing'
	}
}

captionBtn.addEventListener('click', toggleCaption)
